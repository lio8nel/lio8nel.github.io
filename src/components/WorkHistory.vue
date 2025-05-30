<template>
  <section>
    <h2>Work history</h2>
    <div class="experience">
      <p class="title">
        Sep. 2018 - Now ·
        <strong>Salesforce - Principal software engineer</strong>
      </p>
      <p>
        I started this journey as a technical leader, leading a fullstack team to develop new features (UI and APIs)
        on top of the search infrastructure. Most of the features were typeahead features (the system guesses suggestions)
        at that time, and I quickly moved on an API strategy project to draft a standard for search UI APIs. Meanwhile, I've also 
        heavily contributed into moving from our legacy frontend stack to web components (Lightning Web Components).
      </p>
      <p>
        In 2020, I was involed in another org at Salesforce that
        was created during COVID: work.com. This team's goal was to develop HR
        tools for employees (a little like Workday), and I contributed to writing the initial framework. 
        I was also working with the devops team and contributed to improving our CD towards trunk-based development and continuous delivery.
      </p>
      <p>
        After 2 years at work.com, I moved back to the search organization. My next project was to be the acting architect of
        a project called "search manager", which is basically a configuration based / metadata-driven engine to configure Salesforce's search behaviour.
        The main challenge was to take on an existing code base with a lot of legacy / unstructured layers, and to form a team that could both refactor the existing while delivering new features.
        Today the project has been released (GA) and most of the code was moved to a DDD-structured module.
      </p>
      <p>
        Today, I am deeply involved in the development of a next-gen search & agent-based UI platform (data model, backend, APIs and UI).
        This new project involves developing a whole new stack using modern approaches: reactive & asynchronous programming with Spring Reactor, 
        declarative & reactive rendering with Web Components, and cloud-native deployment with Kubernetes.
      </p>
      <p>
        Most of my work is done in Kotlin, Java and JavaScript / TypeScript
        (web components or nodejs). When I can,
        I learn a new programming language or organize coding dojos, to keep my eyes open on new
        development trends. I'm used to talking, writing documents and leading
        projects overseas with different timezone and countries.
      </p>
      <ul class="skills">
        <li>Java / Kotlin</li>
        <li>JavaScript / TypeScript</li>
        <li>Web components (LWC)</li>
        <li>Cloud computing & containerization (aws, k8s, docker, helm, terraform)</li>
        <li>Salseforce platform</li>
        <li>Continuous Delivery</li>
        <li>CI/CD (Jenkins, CircleCI)</li>
        <li>Git</li>
        <li>Craftsmanship</li>
      </ul>
    </div>
    <div class="experience">
      <p class="title">
        Sep. 2013 - Sep. 2018 ·
        <strong>Photoweb - Software architect</strong>
      </p>
      <p>
        I joined Photoweb to rewrite the photo composing software suite with JavaScript & HTML5: all browser vendors were stopping to support Silverlight, which was the technology
        that was initially chosen to implement Photoweb's software. 
        That was a very challenging project, back in 2013 IE9 was still out there and we had to build with standards, and only standards.
        We were the first among our competitors to release in production a full HTML5 rich interface that was capable of editing and layout photos on a complex
        interface.
      </p>
      <p>
        We basically created a frontend framework on top of AngularJS, and had to deal with its scalability problems.
        We did two things: implement a flux-like (actually CQRS-like) state manager and rely on RxJS to handle the user interactions & physics computations. Our engine was capable of rendering
        on an iPad 2 a whole photo-book of hundred pages, each page containing up to 30 elements (photos included).
      </p>
      <p>
        After two years spent on that project, I moved to a Software Architect position. With that role, 
        I had to design and lead mulitple projects for both the e-commerce website and the factory software (Photoweb prints on its own).
        We also started to move to public cloud, and I had the opporutnity to work on deploying a whole Kubernetes stack in Google Cloud Platform.                
      </p>
      <p>
        Overall, our teams were working in a codebase that was surrounded by legacy code (business code was implemented in stored procedures). 
        I've influenced a change with the teams to lift up the business logic at the software level using Domain Driven Design, and by leveraging
        async messaging between bounded contexts. So far that pattern helped to solve problems that were complex to solve beforehand, like the 
        orphan photo-deletion process that went from a cron-based system to a reactive one.
      </p>
      <ul class="skills">
        <li>C# .Net & .Net core</li>
        <li>TDD, DDD</li>
        <li>JavaScript (AngularJS & Vanilla JS)</li>
        <li>Docker, Kubernetes</li>
        <li>RDS (PgSql), SqlServer</li>
        <li>AWS, GCP</li>
        <li>Continuous Delivery</li>
        <li>CI/CD</li>
        <li>Git</li>
        <li>Craftsmanship</li>
      </ul>
    </div>
    <div class="experience">
      <p class="title">
        Dec. 2009 - Sep. 2013 ·
        <strong>Digimind - Lead Software engineer</strong>
      </p>
      <p>
        Digimind was a team distributed between France and
        Marroco. I had the opportuinty to touch all the layers of their
        software, from the design to deploying it myself in production.
      </p>
      <p>
        My first project was to work on a drag-and-drop admin for a knowledge management tool. Basically the idea was
        that customers could conceive their own data model, and that admin tool was there to help them defining theirs.
        That project went GA, and I was in charge (like everyone in the company) of operating the software. I've learned a great 
        deal about dealing with production issues, and finding out problems at the OS level.
      </p>
      <p>
        This experience is also one important milestone as a professional, as I've started to learn and practice TDD heavily.
        That was a game changer in the way I write software, and this kind of started my software craftsmanship journey.
      </p>
      <p>
        I then bootstrapped and lead the frontend team to create the next-gen product: &quot;Digimind
        Social&quot; which was a rich interface written in JavaScript
        &amp; baked by a Java backend running on Twitter storm. That was
        a challenging project, on cutting-edge technologies at that
        time.
      </p>
      <ul class="skills">
        <li>Java</li>
        <li>JavaScript (BackboneJS)</li>
        <li>MySQL</li>
        <li>Solr</li>
        <li>Twitter storm</li>
        <li>Craftsmanship</li>
      </ul>
    </div>
    <div class="experience">
      <p class="title">
        Oct. 2006 - Dec. 2009 ·
        <strong>Object Direct - Contractor</strong>
      </p>
      <p>
        This was my first experience in the industry. I had many
        opportunities to work on various missions and projects involving
        fullstack skills.
      </p>
      <p>
        Object Direct was also providing a training service, and I gave courses for frontend development. I also had the
        chance to create an open source project (wiQuery) and got
        support &amp; time from the company to work on it.
      </p>
      <p>
        Among all my missions for this company, the most outstanding one is certainly my experience 
        as a developer in a startup called Drimki. I had the opportunity to work with people involved
        into the development of a JavaScript framework called prototype (that was a kind of jQuery at that time) and
        learned a lot from them about JavaScript and software overall.
      </p>
      <ul class="skills">
        <li>Java</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>MySQL, PgSQL</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script> 