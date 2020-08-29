export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f4a7c8f3025497120748731',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sj1xa8xz',
                  apiId: '3019b518-56b5-4019-9666-72c9b4694e53'
                },
                {
                  buildHookId: '5f4a7c90cff5d0d14f7c631f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hj3f7k8d',
                  apiId: 'b443a554-3c75-40cf-9636-06ef415159b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amatzon/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hj3f7k8d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
