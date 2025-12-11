// Simple client pour la page Agentic RAG
// Le script lit l'attribut data-endpoint du conteneur #agentic-rag
// et envoie une requête POST { query, top_k }.
// Réponse attendue (exemple):
// {
//   "answer": "Texte de synthèse...",
//   "sources": [{"id":"doc1","title":"Titre","excerpt":"...","url":"..."}],
//   "actions": [{"type":"open_url","description":"Ouvrir...","params":{"url":"..."}} ],
//   "trace": {...}
// }

(function(){
  const root = document.getElementById('agentic-rag');
  if (!root) return;
  const endpoint = root.dataset.endpoint || '/api/agentic-rag';
  const queryEl = document.getElementById('query');
  const runBtn = document.getElementById('run');
  const statusEl = document.getElementById('status');
  const answerEl = document.getElementById('answer');
  const sourcesEl = document.getElementById('sources');
  const actionsEl = document.getElementById('actions');
  const traceEl = document.getElementById('trace');

  function setStatus(s){
    statusEl.textContent = s;
  }

  function renderResponse(json){
    answerEl.textContent = json.answer || '';
    // sources
    sourcesEl.innerHTML = '';
    if (Array.isArray(json.sources)){
      json.sources.forEach(s=>{
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = s.url || '#';
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = s.title || (s.id || 'source');
        li.appendChild(a);
        if (s.excerpt) {
          const p = document.createElement('p');
          p.style.margin = '4px 0 8px';
          p.textContent = s.excerpt;
          li.appendChild(p);
        }
        sourcesEl.appendChild(li);
      });
    }

    // actions
    actionsEl.innerHTML = '';
    if (Array.isArray(json.actions)){
      json.actions.forEach((a, idx)=>{
        const div = document.createElement('div');
        div.style.border = '1px solid #eee';
        div.style.padding = '8px';
        div.style.marginBottom = '6px';
        const title = document.createElement('strong');
        title.textContent = a.type + (a.description ? ` — ${a.description}` : '');
        div.appendChild(title);

        if (a.params){
          const pre = document.createElement('pre');
          pre.style.background = '#fafafa';
          pre.style.padding = '6px';
          pre.textContent = JSON.stringify(a.params, null, 2);
          div.appendChild(pre);
        }

        // If action is an URL open, create button
        if (a.type === 'open_url' && a.params && a.params.url){
          const btn = document.createElement('button');
          btn.textContent = 'Ouvrir';
          btn.onclick = ()=> {
            try {
              const url = new URL(a.params.url, window.location.origin);
              if (url.protocol === 'http:' || url.protocol === 'https:') {
                window.open(url.href, '_blank');
              } else {
                alert('URL non sécurisée. Seuls http et https sont autorisés.');
              }
            } catch (e) {
              alert('URL invalide.');
            }
          };
          div.appendChild(btn);
        }

        actionsEl.appendChild(div);
      });
    }

    traceEl.textContent = JSON.stringify(json.trace || {}, null, 2);
  }

  runBtn.addEventListener('click', async ()=>{
    const q = (queryEl.value || '').trim();
    if (!q) { alert('Veuillez saisir une question.'); return; }

    setStatus('Envoi...');
    answerEl.textContent = '';
    sourcesEl.innerHTML = '';
    actionsEl.innerHTML = '';
    traceEl.textContent = '';

    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        // ATTENTION: ne mettez PAS les clés publiques ici ; utilisez un backend sécurisé
        body: JSON.stringify({ query: q, top_k: 5 })
      });

      if (!resp.ok){
        const text = await resp.text();
        setStatus('Erreur: ' + resp.status);
        traceEl.textContent = text;
        return;
      }

      const json = await resp.json();
      setStatus('Terminé');
      renderResponse(json);
    } catch (err){
      setStatus('Erreur réseau');
      traceEl.textContent = String(err);
    }
  });
})();
