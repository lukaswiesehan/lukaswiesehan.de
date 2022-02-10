export type FAQ = {
  question: string
  answer: string
  action?: {
    url: string
    text: string
  }
  online: boolean
}

export const faqs: FAQ[] = [
  {
    question: 'Warum wird kein CMS oder Theme benötigt?',
    answer:
      'Ich arbeite bereits seit 2 Jahren fast ausschließlich mit einer Architektur, die als JAM-Stack bezeichnet wird. Ein wesentlicher Vorteil davon ist, dass das Frontend, also die eigentliche Website, die Deine Kunden sehen, vom Backend, also z.B. einem CMS, losgelöst wird. So kann die Website auf einem leeren Blatt entstehen, da keine Vorgaben vom CMS berücksichtigt werden müssen.',
    action: {
      text: 'Mehr erfahren',
      url: '/',
    },
    online: true,
  },
  {
    question: 'Kann ich die Inhalte der Website trotzdem selbst bearbeiten?',
    answer:
      'Ja! In dieser modernen Architektur spricht man von Headless CMS, da diese ausschließlich das Backend beinhalten. Du kannst Deine Inhalte also trotzdem in einer einfachen Benutzeroberfläche bearbeiten. Das Beste an dieser Art von Content Management Systemen: Du brauchst bei der Bearbeitung Deiner Inhalte keine Angst haben, im Frontend etwas kaputt zu machen.',
    action: {
      text: 'Mehr erfahren',
      url: '/',
    },
    online: true,
  },
  {
    question: 'Wie werden Texte und Inhalte der Website erarbeitet?',
    answer:
      'Aufbau und Struktur der Inhalte ergeben sich in der Regel aus dem Design. Hierbei achte ich insbesondere auf Gesichtspunkte aus UX, Marketing und SEO. Unter diesen Gesichtspunkten unterstütze ich Dich auch gern bei der Formulierung der Texte. Je nach Bedarf kann ich außerdem auf ein Netzwerk an Freelancern z.B. für Produktfotos, komplexere 3D-Modellierung und Texting zurückgreifen.',
    online: true,
  },
  {
    question: 'Was kostet eine solche Produktwebsite?',
    answer:
      'Ich biete meinen Service grundsätzlich zu Festpreisen auf Projektbasis an. Die konkreten Kosten sind natürlich stark von den Anforderungen an Deine Website abhängig. Als Freelancer kann ich diese allerdings deutlich kostenschonender umsetzen als die meisten Agenturen. Gern erarbeite ich ein entsprechendes Konzept und mache Dir ein unverbindliches Angebot.',
    action: {
      text: 'Gespräch vereinbaren',
      url: '/',
    },
    online: true,
  },
  {
    question: 'Was kommt an laufenden Kosten auf mich zu?',
    answer:
      'Ein weiterer Vorteil der modernen Technologien ist, dass kein umfangreiches Webhosting benötigt wird. Du benötigst lediglich eine Domain und gegebenenfalls Cloud-Services für spezielle Funktionen Deiner Website. Hier zahlst Du aber niemals teure Pauschalen, sondern immer nur das, was Du auch nutzt. So betreibst Du Deine Website definitiv kostenschonender als mit herkömmlichen Systemen. Gerne können wir das im Gespräch für Deinen Anwendungsfall durchgehen.',
    online: true,
  },
]
