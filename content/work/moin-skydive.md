---
id: 1
title: 'Moin Skydive'
date: 'Frühjahr 2021'
excerpt: 'Marketing-Website mit Instagram-Einbindung und Buchungs- und Zahlungssystem für Tandem-Fallschirmsprünge.'
background: '/images/backgrounds/background-green-to-violet.jpg'
cover: '/images/projects/project-moinskydive.png'
url: 'https://moin-skydive.hamburg/'
online: true
---

## Das Projekt

Moin Skydive ist ein Hamburger Unternehmen, das Tandem-Fallschirmsprünge an verschiedenen Sprungplätzen in Norddeutschland anbietet. Die passende Website durfte ich im Frühjahr 2021 gestalten und umsetzen. Neben einer ansprechenden Landing Page, die bereits die wichtigsten Informationen zum Tandemsprung enthält, wurden eine Instagram-Einbindung, ein Buchungs- und Zahlungssystem, eine Anfahrtskarte und ein Kontaktformular eingebunden.

## Technologie

Die Website basiert im Wesentlichen auf Next.js und wird statisch auf dem Vercel-CDN (Content Delivery Network) gehostet. Das statische Hosting, für das kein dedizierter Webspace oder Server nötig ist, sorgt dabei für optimale Performance und Sicherheit, während dank Next.js keine Einbußen in Funktionalität und Interaktivität gemacht werden müssen. Eine solche Architektur wird auch als Jamstack-Architektur bezeichnet.

Das Design der Website wurde speziell für dieses Projekt erarbeitet und mithilfe von Tailwind CSS umgesetzt.

## Instagram-Anbindung

Auf Basis der offiziellen Instagram-API wurde eine Anbindung entwickelt, die sich optimal in die Jamstack-Architektur einfügt. Instagram wird hierbei wie ein Microservice eingebunden, sodass die aktuellsten Bilder beim Aufruf der Website direkt von Instagram geladen werden. Dadurch, dass an dieser Stelle kein Drittanbieter-Service verwendet wird, können die Instagram-Fotos direkt an das Website-Design angepasst werden.

## Buchungs- und Zahlungssystem

Es wurde ein Buchungssystem entwickelt, das als Microservice in die Jamstack-Architektur eingebunden werden kann, sodass auch hierfür kein dedizierter Server bzw. keine dedizierte Datenbank notwendig ist. Das Buchungssystem basiert dabei auf Google Calendar, wo buchbare Slots einfach als Kalendereinträge angelegt werden können. Bei einer Buchung wird der Kalendereintrag entsprechend als belegt gekennzeichnet.

Als Zahlungssystem wurde Stripe eingebunden. Stripe ermöglicht Zahlungen mittels SEPA-Lastschrift, Kredit-/Debitkarte, Apple Pay, Google Pay und weiterer Zahlungsmethoden. Der Zahlungsvorgang wird dabei sicher auf Stripe-Servern verarbeitet, sodass Finanz- und Zahlungsdaten geschützt sind.
