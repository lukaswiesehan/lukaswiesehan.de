---
id: 1
title: 'JamStack – Die Web-Technologie von morgen'
author:
  {
    name: 'Lukas Wiesehan',
    position: 'Designer & Developer',
    avatar: '/images/avatar-lukas-wiesehan.jpg',
    linkedIn: 'https://www.linkedin.com/in/lukas-wiesehan-74931b1bb/',
    instagram: 'https://www.instagram.com/lukaswiesehan.de/',
    twitter: 'https://twitter.com/lukaswiesehan'
  }
date: '16. Februar 2022'
excerpt: 'Vor zwei Jahren habe ich angefangen, mich auf einen Trend in der Webentwicklung zu stürzen, der verspricht, Websites und Web-Apps schneller, sicherer, günstiger und besser skalierbar zu machen. Was dieser sogenannte JamStack ist, wie er entstanden ist, und warum er genau das Richtige für Deine Produktwebsite ist, schauen wir uns nachfolgend an.'
tags: ['JamStack', 'Headless eCommerce', 'Serverless', 'Microservices', 'Produktkonfigurator', 'Händlerkarte']
background: '/images/backgrounds/background-orange-to-blue.jpg'
cta: 'Du möchtest mehr über die Möglichkeiten zur Umsetzung Deiner Produktwebsite erfahren?'
online: true
---

## Was ist der JamStack?

Hinter dem Begriff JamStack verbirgt sich eine Architektur, auf der Websites und Web-Apps aufgebaut werden können. Eine solche Architektur beschreibt, welche Technologien für die Entwicklung einer Website oder Web-App gemeinsam verwendet werden – man spricht auch von einem Technologie-Stack. Der JamStack setzt sich aus folgenden Technologien zusammen.

- **Javascript**: Eine Programmiersprache, die in jedem Browser ausgeführt werden kann und dementsprechend wichtig für die Entwicklung dynamischer Websites bzw. Apps ist.
- **APIs**: Schnittstellen, die zur Integration einzelner Funktionen in die Website verwendet werden. Hierauf werde ich später noch näher eingehen.
- **Markup**: Die Struktur einer Website und ihrer Inhalte besteht aus ganz bestimmt formartiertem Text, der Markup genannt wird. In der Erstellung dieses Textes liegt ein wesentlicher Unterschied zu bisher gängigen Systemen wie z.B. Wordpress. Auch hierauf wird später genauer eingegangen.

JamStack-Websites unterscheiden sich in ihrer Architektur wesentlich von gängigen Systemen wie z.B. Wordpress.

## Wo liegen die Unterschiede zu traditionellen Websites?

Um die Unterschiede zwischen dem JamStack und der traditionellen Architektur zu verstehen, müssen wir uns zunächst den Aufbau traditioneller System anschauen. Daran wird anschließend auch schnell deutlich, worin die Vorteile dieser neuen Technologie liegen.

### Die Architektur von Wordpress & Co.

Etwa 43 % aller Websites verwenden Wordpress unter der Haube. Das liegt vor allem daran, dass das System einfach zu bedienen ist und mithilfe von Plugins für fast jeden Anwendungsfall eine Lösung bereithält. Zum Betrieb einer Wordpress-Website wird ein Server bzw. ein Hosting-Vertrag benötigt, auf dem das System installiert werden kann. Man spricht hier von einem monolithischen System, weil sämtliche Funktionen, Daten und Inhalte, usw. auf diesem Server oder Webspace liegen.

Wenn ein Besucher eine Wordpress-Website ansurft, registriert der Server eine entsprechende Anfrage. Daraufhin wird Code ausgeführt, der die angeforderte Seite anhand der Inhalte und Daten auf dem Server zusammenbaut und dann zurück an den Browser des Besuchers schickt. Wenn die Inhalte allerdings nicht außerordentlich häufig geändert werden, ist das viel unnötiger Rechenaufwand, weil die Seite bei jedem Besuch neu generiert wird.

![Traditionelle Web-Architektur](/images/blog/jamstack-die-web-technologie-von-morgen/scheme-legacy-web-architecture.jpg)

Das sorgt auch dafür, dass Websites, die auf einer solchen Architektur basieren, nur sehr schlecht skalierbar sind. Da jeder Seitenaufruf zunächst auf dem Server verarbeitet werden muss, kann dieser je nach Rechenleistung schnell an seine Grenzen kommen, wenn die Website einen hohen Ansturm erfährt.

Weiterhin kann eine solche Architektur Sicherheitsrisiken mit sich bringen, wenn das System und alle Plugins nicht regelmäßig aktualisiert werden. Das liegt im Wesentlichen daran, jeder Aufruf der Website zur Ausführung von Code auf dem Server führt, auf dem sämtliche (zum Teil personenbezogene) Daten liegen. Da Wordpress so populär ist und viele Websitebetreiber nur sehr unregelmäßig alle Updates durchführen, ist das System ein beliebtes Angriffsziel für Hacker.

### Höhere Performance im durch statisches Hosting

Websites im JamStack werden nicht bei jedem Aufruf der Seite neu generiert, sondern nur wenn es wirklich notwendig ist. Der Code Deiner Website, also das Markup, liegt vorgefertigt auf einem Content Delivery Network (CDN). Das ist ein Netzwerk aus vielen Servern, die über die ganze Welt verteilt sind. Bei einem Aufruf Deiner Website wird diese vorgefertigt von dem Server geladen, der dem Standort des Besuchers am nächsten ist. So erreichen wir blitzschnelle Ladezeiten und sparen Rechenpower und Geld. Denn weil auf dem CDN nur statische Daten liegen und dort Code ausgeführt wird, ist ein solches Hosting in der Regel kostenlos.

Wenn Du Inhalte Deiner Website änderst, wird der Code Deiner Website einmalig neu generiert und auf dem CDN verteilt, sodass Deine Besucher trotzdem immer die aktuellsten Inhalte sehen.

![Neuartige JamStack Architektur](/images/blog/jamstack-die-web-technologie-von-morgen/scheme-jamstack-architecture.jpg)

### Microservices für dynamische Funktionen und Inhalte

Damit Deine Website trotzdem dynamisch sein kann und z.B. einen Blog, einen Shop oder ein Kontaktformular beinhalten kann, werden über sogenannte APIs (Programmierschnittstellen) Microservices eingebunden. Diese heißen so, weil sie immer nur eine konkrete Funktion bereitstellen. Das hat nicht nur Vorteil, dass solche Funktionen zuverlässig funktionieren, da die Entwickler solcher Services sich nur hierauf konzentrieren. Außerdem entsteht für Deine Website ein Gesamtsystem, das im Gegensatz zu monolithischen Systemen exakt die Funktionen beinhaltet, die Du benötigst. Dadurch wird das System für dich übersichtlicher, leichter bedienbar und in aller Regel auch günstiger.

Ein anschauliches Beispiel für das Zusammenspiel verschiedener Microservices das Projekt Moin Skydive.

### Höhere Sicherheit und Skalierbarkeit

Durch das statische Hosting der Website wird das Frontend (die Website, die Deine Besucher sehen) vom Backend (Datenbanken, Funktionen, usw.) entkoppelt. So wird möglichen Hackern keinerlei Angriffsfläche geboten, irgendwie an Inhalte der Datenbanken o.ä. zu kommen. Außerdem sind Microservices in der Regel Cloud-basiert und müssen daher nicht regelmäßig manuell aktualisiert werden. So werden mögliche Sicherheitslücken schnellstmöglich behoben und Du kannst jederzeit ruhig schlafen.

## Die JamStack-Architektur für Deine Produktwebsite

Neben den bereits beschriebenen allgemeinen Vorteilen der JamStack-Architektur bietet diese auch eine hervorragende Basis für die individuelle Entwicklung eines auf Deine Marke zugeschnittenen Designs. Ich möchte Dir noch kurz einige Möglichkeiten beschreiben, Microservices für Deine Website zu nutzen.

### Shop- & Zahlungssysteme

Je nach Anforderungen an den Funktionsumfang Deines Shop-Systems können zum Einen Shopsysteme wie Shopify oder Shopware eingebunden werden, die dank ihrer APIs headless, also ohne eigenes Frontend genutzt werden können.

Wenn z.B. keine physischen Produkte versandt werden sollen, kommt auch die Möglichkeit infrage, mit Stripe oder PayPal lediglich ein Zahlungssystem zu integrieren, um die Komplexität des Gesamtsystems zu reduzieren.

### Produkt-Konfigurator

Bei der Entwicklung eines Produkt-Konfigurators ist die Komplexität der Konfigurationen entscheidend für die Wahl der passenden Microservices. Bei geringer Komplexität kann der Konfigurator häufig bereits mittels Produktvarianten im Shopsystem realisiert werden. Umfangreichere Konfigurationsmöglichkeiten können beispielsweise mithilfe von Produktmetadaten im Shopsystem oder über ein Headless CMS (Content Management System) bereitgestellt werden.

Dank neuester Möglichkeiten in der Frontend-Entwicklung können Produkt-Konfiguratoren auch in Form einer 3D-Umgebung oder sogar in Augmented Reality implementiert werden.

### Händler-Karte

Um Deinen Kunden den lokalen Erwerb Deines Produkts zu vereinfachen, kann eine interaktive Karte eingebunden werden, die Shops in der Nähe des Besuchers anzeigt. Die Karte, die hierfür als Basis dient, kann z.B. von Google Maps bereitgestellt werden. Die Google Maps API bietet sogar die Möglichkeit, die Farbwelt der eingebetteten Karte an Dein Branding anzupassen. Für eine performante Suche anhand der GPS-Koordinaten kann beispielsweise der Search Service Algolia verwendet werden.

### Content Management System

Natürlich musst Du nicht auf die Möglichkeit verzichten, Inhalte Deiner Website bequem in einer einfachen Benutzeroberfläche und ohne Programmierkenntnisse zu aktualisieren. Entsprechend Deiner Anforderungen finden wir ein passendes Headless CMS, sodass Du hier alle Möglichkeiten hast, die Du brauchst. Gleichzeitig wird das CMS so gewählt, dass es möglichst einfach zu bedienen ist, damit Du Dich auf das Wesentliche konzentrieren kannst.
