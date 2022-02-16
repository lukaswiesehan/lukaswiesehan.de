---
id: 2
title: 'Scoo Brewery'
date: 'Sommer 2021'
excerpt: 'Produktwebsite einer Kombucha-Brauerei mit Shopsystem, Händler-Suche und Instagram-Anbindung.'
background: '/images/backgrounds/background-green-to-violet.jpg'
cover: '/images/projects/project-thescoo.png'
url: 'https://thescoo.de/'
online: true
---

## Das Projekt

Das Stader Startup Scoo Brewery hat sich zum Ziel gemacht, das erfrischende Tee-Getränk Kombucha lokal bekannt zu machen und dabei einen alternativen, kulturellen Lebensstil zu vermitteln. Das Design-Konzept der Marke stammt von Nina Sander und bringt neben dem einprägsamen Logo einige tolle Illustrationen mit. Nina hat auch das Design der Website erarbeitet, welches ich im Frühjahr und Sommer 2021 technisch umsetzen durfte.

Besonders hervorzuheben sind hierbei eine eigens entwickelte Händler-Suche und die Einbindung eines Shop-Systems zum Online-Verkauf des Erfrischungsgetränks.

## Technologie

Die Website basiert im Wesentlichen auf Next.js und wird statisch auf Vercel-CDN (Content Delivery Network) gehostet. Das statische Hosting, für das kein Webspace oder Server nötig ist, sorgt dabei für optimale Performance und Sicherheit, während dank Next.js keine Einbußen in Funktionalität und Interaktivität gemacht werden müssen. Dynamische Daten werden über verschiedene Services bereitgestellt, die nachfolgend näher beschrieben werden. Eine solche Architektur wird auch als Jamstack-Architektur bezeichnet.

Das schlichte, aber technisch anspruchsvolle Design der Website wurde mithilfe von Tailwind CSS verwirklicht.

## Shopsystem

Für den Verkauf des Scoo Kombucha auf der Website werden grundlegende Shop-Funktionen benötigt. Da kein ganzes Shop-Frontend benötigt wird, sondern nur eine geringe Anzahl an Produkten auf einer einzelnen Seite dargestellt werden sollen, wurde Shopify in einer Headless-Variante (also ohne Frontend) eingebunden. So können Produkte, Kunden und Bestellungen in Shopify verwaltet werden. Die Produkte inklusive der Beschreibungen, Bilder, Varianten und Preise werden über eine Schnittstelle aus Shopify abgerufen und auf der Website im individuell umgesetzten Design dargestellt. Warenkörbe werden lokal im Browser-Speicher des Nutzers gesichert, sodass hierzu keine Cookies notwendig sind. Der Bezahlvorgang wird schließlich über die Shopify-Schnittstelle initiiert und dann sicher auf Shopify-Servern durchgeführt.

## Händler-Suche

Zur Darstellung der lokalen Händler, bei denen Scoo Kombucha erworben werden kann, wurden Dienste der Google Maps Platform eingebunden. Zur Anzeige der Karte wurde ein individuelles Design erarbeitet, das perfekt zum Stil der Website passt.

Die Händler-Daten werden in einem Headless Content Management System (CMS), in diesem Fall GraphCMS, verwaltet und automatisch mit einem Such-Index in Algolia synchronisiert. Mit Algolia können Such-Anfragen anhand von Koordinaten verarbeitet werden, sodass dem Nutzer die nächstgelegenen Händler anhand der gesuchten Position angezeigt werden können. Neben der Suche an aktuellen Position des Nutzers, die aus dem Browser abgefragt werden kann, wurde auch eine Adress-Suche eingebunden. Über eine Schnittstelle der Google Maps Dienste werden gesuchte Adressen in Koordinaten transformiert, bevor die Suchanfrage mit Algolia verarbeitet wird.

## Instagram-Einbindung

Auf Basis der offiziellen Instagram Basic Display API wurde eine Anbindung entwickelt, die sich optimal in die Jamstack-Architektur einfügt. Instagram wird hierbei wie ein Microservice eingebunden, sodass die aktuellsten Bilder beim Aufruf der Website direkt von Instagram geladen werden. Dadurch, dass an dieser Stelle kein Drittanbieter-Service verwendet wird, können die Instagram-Fotos direkt an das Website-Design angepasst werden.
