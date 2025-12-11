---
layout: page
title: Agentic RAG
permalink: /agentic-rag/
---

<div id="agentic-rag" data-endpoint="{{ site.baseurl }}/api/agentic-rag">
  <h1>Agentic RAG</h1>

  <p>Posez une question au système. Le front-end enverra la requête à une API d'agentic-RAG qui effectuera la récupération documentaire, la synthèse et les actions d'agent.</p>

  <label for="query">Question</label><br/>
  <textarea id="query" rows="4" cols="80" placeholder="Ex: Résume les points clés du document X et propose une action."></textarea><br/>
  <button id="run">Exécuter</button>
  <span id="status" style="margin-left:10px"></span>

  <h2>Réponse</h2>
  <div id="answer" style="white-space:pre-wrap; border:1px solid #ddd; padding:10px; min-height:80px"></div>

  <h3>Sources</h3>
  <ul id="sources"></ul>

  <h3>Actions proposées par l'agent</h3>
  <div id="actions"></div>

  <h3>Trace (debug)</h3>
  <pre id="trace" style="background:#f7f7f7; padding:8px; overflow:auto;"></pre>
</div>

<script src="{{ site.baseurl }}/assets/js/agentic-rag.js"></script>
