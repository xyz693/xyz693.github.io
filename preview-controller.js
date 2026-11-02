/* Isolated preview lifecycle. No frame DOM access or same-origin privilege needed. */
const preview = (() => {
  const get = id => document.getElementById(id);
  let project = null, frame = get('pagePreview'), timer = null;
  let paused = false, covered = false, generation = 0;
  const status = text => get('previewStatus').textContent = text;
  function size() {
    const phone = get('previewSize').value === 'phone';
    const width = phone ? 390 : 1100, height = phone ? 740 : 720;
    const box = frame.parentElement;
    const scale = Math.min(box.clientWidth / width, box.clientHeight / height);
    frame.style.width = width + 'px'; frame.style.height = height + 'px';
    frame.style.transform = 'scale(' + scale + ')';
    frame.style.left = Math.max(0, (box.clientWidth - width * scale) / 2) + 'px';
  }
  function unload() {
    generation++; clearTimeout(timer);
    // Removing the browsing context cancels its scripts and pending work.
    const replacement = frame.cloneNode(false);
    replacement.removeAttribute('src');
    frame.replaceWith(replacement); frame = replacement;
  }
  function render() {
    unload();
    get('previewPause').textContent = paused ? 'Resume preview' : 'Pause preview';
    get('previewPause').setAttribute('aria-pressed', String(paused));
    if (!project) { status('Choose a project to preview.'); return; }
    if (paused || covered || document.hidden) {
      status(paused ? 'Preview paused. Open the full project at any time.' : 'Preview suspended while out of view.');
      return;
    }
    const token = generation;
    status('Loading ' + project.title + '…');
    frame.title = project.title + ' webpage preview';
    frame.loading = 'eager';
    frame.onload = () => {
      if (token !== generation) return;
      clearTimeout(timer);
      // An iframe load event does not prove its scripts or remote data succeeded.
      status('Page loaded. Live data may be restricted; open the full page if incomplete.');
    };
    frame.onerror = () => {
      if (token !== generation) return;
      clearTimeout(timer); status('Preview unavailable. Reload or open the full project.');
    };
    timer = setTimeout(() => {
      if (token === generation) status('Preview is taking longer than expected. Reload or open the full project.');
    }, 10000);
    frame.src = project.file;
    size();
  }
  get('previewSize').onchange = size;
  get('previewPause').onclick = () => { paused = !paused; render(); };
  get('previewRetry').onclick = () => { paused = false; render(); };
  addEventListener('resize', size);
  document.addEventListener('visibilitychange', render);
  return {
    show(p) { project = p; paused = false; covered = false; render(); },
    clear() { project = null; paused = false; covered = false; render(); },
    cover(value) { covered = value; render(); }
  };
})();
