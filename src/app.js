const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'HWV7FAX0P3',
  '2b850ede4a799e0bf191722bad687fcc'
);

const search = instantsearch({
  indexName: 'results',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <a href=${hit.url}><img src=${hit.thumbnail} alt=${hit.title} /></a>
          <div>
            <h1><a href=${hit.url}>${components.Highlight({ hit, attribute: 'title' })}</a></h1>
            <p>${components.Highlight({ hit, attribute: 'description' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
