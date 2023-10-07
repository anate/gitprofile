// gitprofile.config.js

const config = {
  github: {
    username: 'anate', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'anateaugustin',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://anate.github.io/',
    phone: '+91-9526364119',
    email: 'anate.maryaugustin@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Golang (Go)',
    'R',
    'C',
    'C++',
    'Ruby',
    'Perl',
    'Matlab',
    'Octave',
    'Github',
    'Bitbucket',
    'Perforce',
    'Jenkins', 
    'Ansible', 
    'Terraform', 
    'Chef', 
    'Puppet', 
    'Jinja',
    'Virtualization',
    'Containerization', 
    'Docker', 
    'Kubernetes', 
    'Helm', 
    'Istio',
    'Elastic-Stack (ELK)', 
    'EFK', 
    'Filebeat', 
    'Loki', 
    'Grafana', 
    'Kibana', 
    'Prometheus',  
    'Fluentd',
    'Fluentbit',
    'Zipkin', 
    'Tempo', 
    'InfluxDB', 
    'Jaeger', 
    'OpenTelemetry', 
    'OpenSearch',
    'Elasticsearch',
    'MySQL', 
    'PostgreSQL',
    'MongoDB', 
    'GraphQL', 
    'Redis',
    'FastAPI', 
    'Django', 
    'Flask',
    'PyTest', 
    'Locust', 
    'JMeter', 
    'Postman', 
    'Unittest',
    'Tensorflow', 
    'Keras', 
    'PyTorch', 
    'Caffe', 
    'OpenCV', 
    'Kornia', 
    'Radon', 
    'NLTK', 
    'NetworkX', 
    'scikit-learn',
    'numpy',
    'pandas',
    'bokeh',
    'seaborn',
    'plotly',
    'Eclipse', 
    'Visual Studio',
    'PyCharm',
    'VHDL', 
    'Verilog',
    'Git',
    'JIRA', 
    'Confluence',
    'PowerBI',
    'Splunk',
    'LaTeX', 
    'Doxygen', 
    'Sphinx', 
    'MS Office Suite',
    'RHEL',
    'SuSE',
    'Ubuntu',
    'Fedora',
    'Windows',
  ],
  experiences: [
    {
      company: 'Dell Technologies',
      position: 'Software Senior Engineer',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://www.dell.com/en-in/dt/solutions/index.htm',
    },
    {
      company: 'Dell EMC',
      position: 'Test Engineer 2',
      from: 'July 2021',
      to: 'June 2023',
      companyLink: 'https://www.dell.com/en-in/dt/solutions/index.htm',
    },
    {
      company: 'Gadgeon Smart Systems',
      position: 'Software Engineer',
      from: 'June 2017',
      to: 'June 2019',
      companyLink: 'https://gadgeon.com/',
    },
  ],
  certifications: [
    {
      name: 'Registered Product Owner',
      body: 'Scrum Inc',
      year: 'September 2022',
      link: 'https://drive.google.com/file/d/1EQebwv0iRV5acs2JdJjB2bRVm4zDoHtY/view?usp=sharing'
    },
    {
      name: 'Registered Scrum Master',
      body: 'Scrum Inc',
      year: 'September 2022',
      link: 'https://drive.google.com/file/d/1hOHBuYH3iAD4VfyIbaVxWjMEt7eo-sY2/view?usp=sharing'
    },
    {
      name: 'Deep Learning Specialization,',
      body: 'deeplearning.ai',
      year: 'March 2022',
      link: 'https://example.com'
    },
    {
      name: 'Applied Data Science with Python',
      body: 'University of Michigan via Coursera',
      year: 'March 2022',
      link: 'https://example.com'
    },
    {
      name: 'Machine Learning',
      body: 'Stanford University, via Coursera',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], 
  education: [
    {
      institution: 'National Institute of Technology, Calicut',
      degree: 'Masters in Technology (M.Tech) - Specialization in Signal Processing',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Cochin University of Science & Technology',
      degree: 'Bachelors in Technology (B.Tech) - Major in Electronics & Communication Engineering',
      from: '2013',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@anate.maryaugustin', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/anate/anate.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
