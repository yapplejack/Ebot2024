---
sidebar_label: 'About This Site'
sidebar_position: 1
header-includes:
  - \pagenumbering{gobble}
---

# About This Site

:::note
I do not plan to include this in the final release, some of the ideas here where scrapped, this is about 3 months old.
:::

## What is this?

This is a website that uses a markdown-folder-structure based react app called Docusaurus. More importantly this is attempt at improving the documentation for the Everybot and creating a home for additional FRC resources.

<hr/>

### Goals


- Create a platform that allows for the manual and build videos to have a symbiotic relationship
- Move away Google Doc as the public facing manual without heavily sacrificing collaboration, printability or ease of use
- Use Google Docs internally for creating the content of the manual to ensure no barriers exist for those who want to contribute
- Improve navigation of the manual
- Host resources relevant to Everybot and low resource teams in both video and text
- Allow for the integration of those resources into the manual to give more context and cut down on what needs to be filmed for a section 
- Provide updates to teams on additions/changes to the manual and major events (critical out of stock components, etc.) 

<hr/>

### What is here right now?

Currently I have converted some of the manual into markdown in the docs section. All of the sections print nearly identically to a Google Doc and a majority of desired styling from the doc is also present. 

<p> <br /> </p>

There is some scaffolding for a fundamentals of FRC section, meant to exist as a wiki for low resource robotics. Additionally it could be the home for our skill videos, which will be discussed in a later section.  

<p> <br /> </p>

There is also a updates section that could be used to let people know when there are stock issues, changes or additions to manual.

<p> <br /> </p>

Lastly there is an algorithm that is able to takes Google docs and converts them into a markdown file.

<hr/>

### Why make a website?

After my time working on both the documentation and build videos I was disappointed by disunity between them. I want the resources to benefit symbiotically from each other. The manual needs videos because skills like measuring and machining can be difficult to explain in text and any holes left by limitations of the instructions can be filled by videos. It then follows that videos are at their best if they are integrated into the manual, as they need the organization it provides.

<br/>

I have looked into alternatives for Google Docs, specifically GitBook, which both REV and WCP use but I found it lacking. Video integration doesn't work too well, their printing is a paid feature (and doesn't function well), their Google Doc conversion is significantly worse than mine and they lack a lot of customization.

<br/>

The main goal that I set out with was for each section to allow for embedded videos for better manual to video cohesion.

<br/>

<details >
    <summary>
        Build Video for Section
    </summary>
    <div>
    <iframe width="420" height="315"
        src="https://www.youtube.com/embed/def5QH7UUIU">
    </iframe>
    </div>
</details>

<br/>

Notability these videos do not sacrifice printing as they hide themselves when using ctrl + p.

<br/>

In addition to section specific videos it would be nice to have prerecorded videos called "skill videos" (temp name) that could be used to bolster a section and cut down on required in-season filming. These videos are what I would like to make for the fundamentals of FRC.

<br/>

<details >
    <summary>
        Skill videos could include:
    </summary>
    <div>
        <ul>
            <li>Reading Engineering Drawings</li>
            <li>Using specific machines</li>
            <li>Dimensioning/marking and so on</li>
            <li>Basically any fundamentals</li>
        </ul>
    </div>
</details>

The concept of what a page of the manual would look like with a section video can be seen [here](../manual/superstructure/machining.md), please try to print it if you desire.

<hr/>

### Google Docs is not amazing for 150 page manuals

Google Docs had a lot of trouble loading the 397 images we used on less beefy computers.

<br/>

Additionally navigation is not great with G-Docs, we definitely could have done better with our heading usage however on lesser machines there is still a massive load when skipping around.

<br/>

With the pages being broken up as they are, users should have to load a max of 50 images.

<hr/>

### What does the "competition" look like?

[REV Starter Bot](https://docs.revrobotics.com/frc-kickoff-concepts/charged-up-2023/starter-bot-2023-rev-ion-frc/2023-rev-ion-frc-starter-bot-build-guide): Half of the images wouldn't load a few weeks ago. Major printing when using their REV starter bot manual, this may have been mitigated however it still produces errors. They use GitBook. 

[WCP](https://docs.wcproducts.com/wcp-single-stage-gearbox/): GitBooks users.

[Thrifty](https://drive.google.com/drive/folders/1J4WqhSLfIULLtzq9aZi6ZGNaLbMHUs0I): Super clean PDF that focuses on inline images.

[AM](https://cdn.andymark.com/media/W1siZiIsIjIwMjMvMDEvMjYvMTEvNTEvNTYvOTMzZjk2M2YtNGM3ZS00ZDJkLWIwNmUtOGMxYjQ0Y2M2ZjViL1dDREMgQXNzZW1ibHkgR3VpZGUgdjEuMjYuMjMucGRmIl1d/WCDC%20Assembly%20Guide%20v1.26.23.pdf?sha=5ab842de7f106a9b): Blocked instructions in PDF form.

<hr/>

### How useable is it?

It is getting close to being good. My major concerns were a massive installation requirement, lack of collaboration in the refining of the markdown articles, having people learn how to modify markdown with HTML and the webdev background required to modify the website. I have found solutions to 3 of these issues.

<br/>

I have found an online dev environment called codesandbox that is able to handle everything. All you have to do is log in with a github account and you can start editing, no downloads required.

<br/>

Codesandbox allows for live collaboration just like Google Docs or more realistically VScode liveshare. It allows people to easily make folders, add articles and see them all in one browser window. Additionally it allows people to push and audit pull requests.

<br/>

At this point there is not too much HTML to learn in order to fix errors when Google Docs are imported. There are about 10 different operations to do and none of them are complicated, so it should be easy to give someone a glossary of them and I expect that it shouldn't be hard to pickup. I might be able to solo work on the website but it would be good to have 1-2 extra mentors or students.

<br/>

Finally comes the last part, if we need major changes to website it can be tough to make them without webdev knowledge, even theming it correctly is a programming challenge. This is a decent downside but the site shouldn't need any modifications year to year once the foundation has been layed. The only massive issue I could see is google changing the way they export Google Docs, the import function is 400 lines of RegEx, which could take someone a few weekends to understand and fix.

<hr/>

### How do you use it?

Currently you create a Google Doc containing the page info, feed it to website using the /crop extension and then clean up the spacing on the result. That or you could write pages purely in mdx.

<br/>

I am working on speeding up the process but after setting up your environment you can create pages by doing the following: 

<div>
    <ul>
        <li>Make sure the Google Doc is formatted correctly: make sure images are not positioned if possible especially if contained in the same paragraph and any positioned images are fixed to text</li>
        <li>Run the script I will provide and download the G-Doc as a web page</li>
        <li>Feed the results into /ebot/crop extension, you will receive a zipped file that contains all the images and some console output that will be your markdown file</li>
        <li>Create folders for the images and markdown file, then cleanup the markdown file</li>
    </ul>
</div>

The conversion from G-Docs to Word Docs is not 100% clean so there will be some minor issues to cleanup however most issues should be easy to take care of.

<br/>

In theory it should be easy to process an entire section like Superstructure and have the program produce a zip file that can be dragged into the project folder to heavily cut down on the number of google docs used.

<hr/>

### How is it hosted?

Currently this running on Github Pages via the gh-pages branch in my repository for it, with the project being saved to the main branch. The website can easily be hosted for free through a variety of providers however Github pages should be good enough. GitHub pages sites may not exceed 1GB, this site is currently ~250MBs. The other issue would be the 100GB rate limit which could require a switch to a different hosting provider but this would be easy to accommodate. 