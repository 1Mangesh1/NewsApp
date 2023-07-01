import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "UN to investigate fate of 130,000 people missing in Syria war",
      description:
        "Syria, Russia, Belarus, China, North Korea, Cuba and Iran were among those voting against UN resolution.",
      url: "http://www.aljazeera.com/news/2023/6/30/un-to-investigate-fate-of-130000-people-missing-in-syria-war",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/06/2020-03-03T134718Z_298947975_RC2DCF9FHZKZ_RTRMADP_3_SYRIA-SECURITY-IDLIB-1-1688099129.jpg?resize=1920%2C1401",
      publishedAt: "2023-06-30T05:02:39Z",
      content:
        "The United Nations General Assembly approved a resolution that will establish an independent body to determine what happened to more than 130,000 people missing as a result of the conflict in Syria.\r… [+3703 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "DIRK KRÜMPELMANN",
      title:
        "Borussia Mönchengladbach: Gladbach verliert über Nacht 48 Millionen Euro! | Sport",
      description:
        "Warum Gladbach jetzt auch noch über Nacht 48 Millionen Euro verliert – nur mit BILDplus!",
      url: "https://www.bild.de/bild-plus/sport/fussball/borussia-moenchengladbach/borussia-moenchengladbach-gladbach-verliert-ueber-nacht-48-millionen-euro-84510112.bild.html",
      urlToImage:
        "https://images.bild.de/649d8cf4dac49c4e8a59d7da/08bbf9c3bb19171a74c379862bb8926c,4d0b444c?w=1280",
      publishedAt: "2023-06-30T05:00:56Z",
      content:
        "Verschwindet Gladbach auf Dauer im Mittelmaß? Weil der Klub durch Corona und einige ablösefreie Abgänge von Hochkarätern finanziell nicht mehr auf Rosen gebettet ist, fehlt immer noch ein wirklicher … [+99 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "SAMYA KULLAB",
      title:
        "Ukraine aims to wear down and outsmart a Russian army distracted by infighting",
      description:
        "KYIV, Ukraine (AP) — The ambush had been postponed three times before Ukrainian commanders decided one recent night that conditions were finally right. Cloaked in darkness, a battalion of Kyiv’s 129th brigade pressed ahead, advancing stealthily on unsuspectin…",
      url: "https://apnews.com/2c4923f665e5aab927073dc86ed3f1be",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/28932bc322644a2d9c1fb6362e8744b4/3000.jpeg",
      publishedAt: "2023-06-30T04:29:27Z",
      content:
        "KYIV, Ukraine (AP) — The ambush had been postponed three times before Ukrainian commanders decided one recent night that conditions were finally right. Cloaked in darkness, a battalion of Kyiv’s 129t… [+7770 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "EU officials concerned over Russian threat with a ‘weaker Putin’",
      description:
        "Ukrainian President Volodymyr Zelenskyy tells EU summit that turmoil for Putin in Russia was advantageous to the West.",
      url: "http://www.aljazeera.com/news/2023/6/30/eu-officials-concerned-over-russian-threat-with-a-weaker-putin",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/06/2023-06-28T193351Z_1987418106_RC2JS1A9RMRG_RTRMADP_3_RUSSIA-PUTIN-1688095251.jpg?resize=1920%2C1440",
      publishedAt: "2023-06-30T04:05:04Z",
      content:
        "The European Union officials have warned that Russia has become more dangerous following last weekends short-lived mutiny by the countrys Wagner mercenary force which had exposed that President Vladi… [+5768 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Ian Lovett",
      title:
        "Ukraine Hits Russian Defenses From a Distance Before Risking Troops",
      description:
        "With ground counteroffensive stalled, Kyiv tries to interrupt the Kremlin’s supply lines and degrade its forces",
      url: "https://www.wsj.com/articles/ukraine-hits-russian-defenses-from-a-distance-before-risking-troops-26cd2502?mod=hp_lead_pos2",
      urlToImage: "https://images.wsj.net/im-806374/social",
      publishedAt: "2023-06-30T04:01:00Z",
      content: null,
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Erin Snodgrass",
      title:
        "Putin makes flurry of weird public appearances after Wagner revolt",
      description:
        "The Russian president made two public appearances just days after the Wagner Group staged an armed revolt against the country's defense ministry.",
      url: "http://www.businessinsider.com/putin-makes-flurry-of-weird-public-appearances-after-wagner-revolt-2023-6",
      urlToImage:
        "https://i.insider.com/649e297afd8a3e0019120acf?width=1200&format=jpeg",
      publishedAt: "2023-06-30T02:09:08Z",
      content:
        "Putin appears to be on the prowl for good publicity in the aftermath of the Wagner Group's armed uprising.\r\nThe Russian president made two public appearances this week just days after the Wagner merc… [+1723 chars]",
    },
    {
      source: {
        id: "business-insider-uk",
        name: "Business Insider (UK)",
      },
      author: "Erin Snodgrass",
      title:
        "Putin makes flurry of weird public appearances after Wagner revolt",
      description:
        "The Russian president made two public appearances just days after the Wagner Group staged an armed revolt against the country's defense ministry.",
      url: "http://uk.businessinsider.com/putin-makes-flurry-of-weird-public-appearances-after-wagner-revolt-2023-6",
      urlToImage:
        "https://i.insider.com/649e297afd8a3e0019120acf?width=1200&format=jpeg",
      publishedAt: "2023-06-30T02:09:08Z",
      content:
        "Putin appears to be on the prowl for good publicity in the aftermath of the Wagner Group's armed uprising.\r\nThe Russian president made two public appearances this week just days after the Wagner merc… [+1723 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "WILL WEISSERT",
      title:
        "Biden talks Supreme Court and Russia but also media and McCain in rare network interview",
      description:
        "WASHINGTON (AP) — President Joe Biden rarely gives network interviews, and when he sat down in the MSNBC studio on Thursday, it came at an especially busy time, with the Supreme Court having just overturned the use of affirmative action in college admissions …",
      url: "https://apnews.com/4deed31fbacd674323d3e35f23714170",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/8c65f49796b841e881b9be7a7628232c/3000.jpeg",
      publishedAt: "2023-06-30T01:46:27Z",
      content:
        "WASHINGTON (AP) — President Joe Biden rarely gives network interviews, and when he sat down in the MSNBC studio on Thursday, it came at an especially busy time, with the Supreme Court having just ove… [+4406 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Russia-Ukraine war: List of key events, day 492",
      description:
        "As the war enters it 492nd day, these are the main developments.",
      url: "http://www.aljazeera.com/news/2023/6/30/russia-ukraine-war-list-of-key-events-day-492",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/06/AP23180786483447-1688084152.jpg?resize=1200%2C675",
      publishedAt: "2023-06-30T00:45:24Z",
      content:
        "This is the situation as it stands on Friday, June 30.\r\nFighting\r\n<ul><li>Wagner mercenary force chief Yevgeny Prigozhin has been told that his fighters will no longer take part in Russias war in Ukr… [+5181 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Lindsay Kornick",
      title:
        "Buttigieg defends Biden confusing Ukraine and Iraq twice in 2 days: 'Very focused on details'",
      description:
        'Transportation Secretary Pete Buttigieg defended President Biden mistakenly referring to the Russia-Ukraine war as the “war in Iraq" twice in one week.',
      url: "https://www.foxnews.com/media/buttigieg-defends-biden-confusing-ukraine-iraq-twice-2-days-focused-details",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/Pete-Buttigieg-defends-Bidens-Iraq-slipups-He-has-been-extraordinarily-effective.jpg",
      publishedAt: "2023-06-29T23:30:15Z",
      content:
        'Secretary of Transportation Pete Buttigieg dismissed President Biden repeatedly confusing the countries of Ukraine and Iraq while appearing on "CNN Primetime" Wednesday night.\r\nThe president faced in… [+3247 chars]',
    },
    {
      source: {
        id: "la-repubblica",
        name: "La Repubblica",
      },
      author: "La Repubblica",
      title:
        "Guerra Ucraina - Russia, le news di oggi. Cnn: Surovikin membro vip segreto della Wagner. Wsj: Usa valutano i…",
      description:
        'Mosca annuncia che la Wagner non combatterà più in Ucraina. E il Cremlino gela la missione di Zuppi: "Per ora non raggiunto alcun accordo".',
      url: "https://www.repubblica.it/esteri/2023/06/30/diretta/guerra_ucraina_russia_news_oggi-406165158/",
      urlToImage:
        "https://www.repstatic.it/video/photo/2023/06/29/904387/904387-thumb-full-720-clp_di_feo290623.jpg",
      publishedAt: "2023-06-29T22:15:59Z",
      content:
        "Gli Usa stanno valutando l'invio a Kiev del sistema missilistico tattico a lungo raggio Atacms. Lo riporta il Wall Street Journal citando funzionari americani ed europei. Secondo queste fonti, la dec… [+319 chars]",
    },
    {
      source: {
        id: "reddit-r-all",
        name: "Reddit /r/all",
      },
      author:
        "IAN PANNELL, PATRICK REEVELL, DRAGANA JOVANOVIC and IVAN PEREIRA",
      title:
        "Ukrainian soldiers say they owe lives to US-supplied Bradley vehicles",
      description:
        "As Ukrainian forces continue their counteroffensive against Russia, some soldiers say an American-supplied vehicle is making a key difference in their...",
      url: "https://www.yahoo.com/gma/ukrainian-soldiers-owe-lives-us-213400921.html",
      urlToImage:
        "https://media.zenfs.com/en/us.abcnews.go.com/76dceec69693f3fc3a59748bc1e9eb98",
      publishedAt: "2023-06-29T21:34:00Z",
      content:
        "As Ukrainian forces continue their counteroffensive against Russia, some soldiers say an American-supplied vehicle is making a key difference in their advances, and more importantly, saving lives.\r\nT… [+3806 chars]",
    },
    {
      source: {
        id: "ansa",
        name: "ANSA.it",
      },
      author: "ANSA.it",
      title:
        "Bbc, 'la Wagner sta ancora reclutando miliziani in Russia' - Ultima Ora",
      description:
        "Il gruppo Wagner sta ancora reclutando combattenti in tutta la Russia, pochi giorni dopo un ammutinamento che ha portato Vladimir Putin a temere una guerra civile. (ANSA)",
      url: "http://www.ansa.it/sito/notizie/topnews/2023/06/29/bbc-la-wagner-sta-ancora-reclutando-miliziani-in-russia_d025414e-bd63-4eea-8358-a1406aa317b9.html",
      urlToImage:
        "https://www.ansa.it/webimages/img_700/2023/6/25/67ce218025614b04350495b11e42d3b3.jpg",
      publishedAt: "2023-06-29T21:11:00Z",
      content:
        'Se hai scelto di non accettare i cookie di profilazione e tracciamento, puoi aderire all’abbonamento "Consentless" a un costo molto accessibile, oppure scegliere un altro abbonamento per accedere ad … [+320 chars]',
    },
    {
      source: {
        id: "il-sole-24-ore",
        name: "Il Sole 24 Ore",
      },
      author: null,
      title:
        "Ucraina, ultime notizie. Purghe di Putin: giallo Surovkin, la Wagner non combatterà più in Ucraina. Ma continua a reclutare in Russia",
      description:
        "Il Cremlino è impegnato in un giro di vite sui simpatizzanti della Wagner dopo il fallito golpe della milizia la scorsa settimana. Giallo su Surovikin. Secondo Bloomberg Surovikin è sotto interrogatorio da diversi giorni, ma non sarebbe in prigione. Intanto M…",
      url: "https://www.ilsole24ore.com/art/ucraina-ultime-notizie-29-giugno-2023-AERnn9sD",
      urlToImage:
        "https://i2.res.24o.it/images2010/2023/06/AERnn9sD/images/6ef16a6a-1656-11ee-a5c1-4ed1c6996980-fotohome0.jpg",
      publishedAt: "2023-06-29T20:26:26Z",
      content:
        "Bisogna porre fine a questa orrenda guerra e ciò potrà avvenire solo se ci sarà un accordo tra gli Stati Uniti e la Cina. Lo ha detto Romano Prodi, ex presidente del Consiglio e della Commissione eur… [+1159 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Wagner still recruiting despite mutiny, BBC finds",
      description:
        "The BBC called more than a dozen Russian recruitment centres and was told it's business as usual.",
      url: "http://www.bbc.co.uk/news/world-europe-66060392",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3664/production/_130242931_085790613.jpg",
      publishedAt: "2023-06-29T19:22:20.6706613Z",
      content:
        "The Wagner Group is still recruiting fighters across Russia, days after staging a mutiny that led Vladimir Putin to raise fears of civil war.\r\nUsing a Russian phone number, we called more than a doze… [+5133 chars]",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Cebelihle Bhengu",
      title:
        "Ramaphosa files confidential affidavit ahead of Putin's anticipated attendance at BRICS summit",
      description:
        "President Cyril Ramaphosa filed a confidential answering affidavit ahead of Russian President Vladimir Putin's anticipated attendance at the BRICS summit in South Africa in August.",
      url: "https://www.news24.com/news24/southafrica/news/ramaphosa-files-confidential-affidavit-ahead-of-putins-anticipated-attendance-at-brics-summit-20230629",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/4501/d8353d7876ba49dcb72d021c0b15b8e0.jpg",
      publishedAt: "2023-06-29T18:42:54+00:00",
      content:
        "<ul><li>President Cyril Ramaphosa filed a confidential affidavit ahead of Russian President Vladimir Putin's attendance at the BRICS summit in South Africa in August.</li><li>The DA approached the co… [+2300 chars]",
    },
    
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Robyn Dixon, Catherine Belton, Mary Ilyushina",
      title:
        "Russian elite brace for sweeping Kremlin investigation into Wagner rebellion",
      description:
        "Questions swirled Thursday about the whereabouts of a top general and Russia’s elite steeled themselves for a sweeping investigation into the mercenary rebellion.",
      url: "https://www.washingtonpost.com/world/2023/06/29/kremlin-putin-investigation-wagner-rebellion/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZQOB3N3SAWFI2V6XCAKGOQIZ5M.jpg&w=1440",
      publishedAt: "2023-06-29T17:19:17Z",
      content:
        "Comment on this story\r\nComment\r\nRIGA, Latvia The Kremlin was in overdrive on Thursday striving to consolidate control and project an image of normalcy as questions swirled about the whereabouts of a … [+9069 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "TARA COPP and NOMAAN MERCHANT",
      title:
        "Russian general is believed to be detained in aftermath of Wagner mutiny, AP sources say",
      description:
        "WASHINGTON (AP) — Gen. Sergei Surovikin, the deputy commander of the Russian group of forces fighting in Ukraine, is believed to have been detained days after mercenaries staged a revolt inside Russia, two people familiar with the matter told The Associated P…",
      url: "https://apnews.com/b2e942036548a05f1f65791d0e70ae17",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/982e54c0761145e699426525a8b7638d/3000.jpeg",
      publishedAt: "2023-06-29T14:33:38Z",
      content:
        "WASHINGTON (AP) — Gen. Sergei Surovikin, the deputy commander of the Russian group of forces fighting in Ukraine, is believed to have been detained days after mercenaries staged a revolt inside Russi… [+4663 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "",
      title:
        "Ex-US Marine in Ukraine shares video of storming of Russian positions | CNN",
      description:
        "CNN’s Erin Burnett speaks with Ex-US Marine Garrison Foster who shared an exclusive video from the front lines in Ukraine.",
      url: "https://www.cnn.com/videos/world/2023/06/29/ex-us-marine-fighting-ukraine-bodycam-footage-garrison-foster-ebof-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230628224820-ex-us-marine-ebof-vpx.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-29T05:20:58Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News - TopHeadlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url} >
                <NewsItem title={element.title.slice(0, 70)} description={element.description.slice(0,100)} imageurl={element.urlToImage} url={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    ); 
  }
}

export default News;
