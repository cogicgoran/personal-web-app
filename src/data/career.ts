export interface CareerCardData {
    id: string
    title: string
    subtitle: string
    imgSource: string
    responsibilities: Array<string>
}

export const careerData: Array<CareerCardData> = [
    {
        id: 'fws',
        title: 'Forwardslash',
        subtitle: 'Web Developer',
        imgSource: '/forwardslash-logo.png',
        responsibilities: [
            'Built web applications(React, Typescript)',
            'Built web applications(NextJS, Typescript)',
            'Built APIs(node, express, nest)',
            'Worked on internal tools(node)',
            'Worked with Docker',
            'Worked with cloud solution provider services(AWS, Digital Ocean)',
        ],
    },
    {
        id: 'fws-intern',
        title: 'Forwardslash',
        subtitle: 'Web Developer Internship',
        imgSource: '/forwardslash-logo.png',
        responsibilities: [
            'Built small vanilla js web app',
            'Built small react with javascript, used publicly available APIs',
            'Built small react apps using typescript',
        ],
    },
    {
        id: 'vega',
        title: 'Vega IT',
        subtitle: 'Front-end internship',
        imgSource: '/vegait-logo.png',
        responsibilities: [
            'Create reusable page template using raw html, css, js',
        ],
    },
]
