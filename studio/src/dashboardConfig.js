export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6fc13e47cd082d77922476',
                  title: 'Sanity Studio',
                  name: 'foundry-news-studio',
                  apiId: '8283c105-a53b-4223-9753-f9d02bc54420'
                },
                {
                  buildHookId: '5f6fc13e3bbe868ad6b6fe24',
                  title: 'Blog Website',
                  name: 'foundry-news',
                  apiId: '183624f3-fe5f-4404-815a-a354c3ca2aa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YAttiax/foundry-news',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://foundry-news.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
