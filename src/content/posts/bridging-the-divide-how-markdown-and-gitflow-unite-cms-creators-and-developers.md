---
title: "Bridging the Divide: How Markdown and Gitflow Unite CMS Creators and
  Developers"
description: Optimize CMS workflows for SEO with a markdown & gitflow framework.
  Post details solving dev & creator issues.
publishedAt: 2024-02-16T03:25:13.921Z
isPublish: false
isDraft: true
---
## The Relationship Between CMS Developers and Content Creators

Content Management Systems (CMSs) are designed to make publishing and managing content easy for non-technical users. However, the traditional CMS setup can often lead to friction between developers tasked with building and maintaining the CMS, and the content creators who use it to publish articles, blog posts, and other content. 

Content creators care most about having an intuitive interface, with familiar formatting tools and a simple workflow for drafting, reviewing, and publishing their work. They want to focus on the content itself, not deal with technical hurdles.

Developers, on the other hand, prioritize building a robust, scalable CMS architecture. Their work includes backend configuration, integrating APIs, optimizing page load times, and implementing new features. The needs of content creators often take a backseat during development sprints.

This mismatch in priorities can cause issues. Content creators may find the CMS unintuitive or limiting. When they request new features or customizations, developers see these as unwelcome distractions from their roadmap. There can also be friction around update cycles. Content teams want stability when publishing daily content, while developers want to rapidly release new code.

The end result is that the CMS fails to meet the needs of either group. Content teams work around limitations and deadlines get missed. Developers feel overwhelmed by support tickets. This leads to frustration on both sides.

Bridging this gap requires recognizing the different incentives at play, and finding solutions that allow each team to focus on their strength. As we'll explore, modern CMS frameworks can help by separating content authoring from development.

## How CMS Frameworks Can Help

CMS frameworks provide a different approach compared to traditional, monolithic CMS platforms. Rather than an all-in-one system, CMS frameworks separate the frontend interface from the backend content APIs. 

With this separation, developers can focus on building a customized backend that exposes content through APIs and schemas. The frontend is decoupled, allowing it to be replaced or modified as needed without affecting the underlying content structure.

The main advantage of using a CMS framework is the flexibility it provides. Developers have freedom to use their preferred languages and tools to create the content APIs. They don't have to work within the constraints of a vendor-controlled system.

On the frontend, content creators and designers have options to use various frameworks, templates, and JavaScript libraries. The presentation layer can be swapped out to match brand needs without rebuilding the content APIs.

Overall, CMS frameworks empower both developers and content creators. Developers gain control over the backend to meet project requirements. Content teams can choose different frontend tools and interfaces tailored to their skills and preferences. This separation of concerns is the main benefit of the CMS framework approach.

## Markdown Instead of WYSIWYG

Many developers and writers prefer using markdown over WYSIWYG editors for content creation for several reasons:

- Markdown is simple and easy to learn. The plaintext formatting syntax is intuitive yet powerful enough to create richly formatted documents. Writers can focus on the content instead of fiddling with formatting options.

- Markdown is flexible. The plaintext files work on any device or platform. Writers aren't constrained to an editor's limitations. Markdown can be rendered to HTML, PDFs, slide decks and more.

- Markdown is portable. The plaintext files can be opened with any text editor on any operating system. There's no vendor lock-in or proprietary formats. Writers can work anywhere.

- Markdown plays nicely with version control like Git. The plaintext files integrate seamlessly into version control workflows. Changes are easy to track, revert, and collaborate on.

- Markdown reduces the developer workload for maintaining a complex WYSIWYG editor. Without the overhead of administrating an editor, developers can focus on other CMS features.

Overall, markdown streamlines writing and simplifies the technical workflow. For these reasons, many developers and writers prefer authoring in markdown over traditional WYSIWYG editors.

## Implementing Git Workflows

Git is a distributed version control system that enables multiple contributors to collaborate on projects efficiently. At its core, Git tracks changes to files and allows you to record file changes in "commits". These commits capture a snapshot of your project so you can revert back to previous versions. 

Branches in Git allow you to diverge from the main project timeline to develop a new feature or fix a bug without impacting the main codebase. This enables multiple contributors to work in parallel. Popular workflows like GitFlow provide structure for managing feature branches and releases.

For CMS projects, using Git empowers both developers and content creators:

- Developers can focus on core CMS development in the main branch while content creators can author posts and manage content in separate branches.

- Content creators don't need to worry about impacting core CMS code. They can draft and edit posts freely in feature branches and only merge to the main branch when ready.

- Developers maintain control over what gets merged into the main branch while still giving content creators flexibility.

- Git enables seamless collaboration with built-in tools for merging branches and resolving conflicts if they arise.

Overall, implementing an organized Git workflow makes it easier for developers and content creators to work together productively on a CMS project.

## Putting It All Together

Using a combination of a CMS framework, Markdown, and GitFlow improves the experience for both content creators and developers. Here's how the pieces fit together:

The CMS framework provides the core infrastructure and APIs for managing content. This allows developers to focus on building robust APIs and infrastructure without having to maintain a traditional WYSIWYG editor.  

Content creators write posts and pages using Markdown files. Markdown is a simple text-based format that's easy to write and edit. Content creators can focus on their writing without slow editor load times or complex formatting options to learn.

With the content saved as Markdown files, it's easy to integrate a Git-based workflow. Using a branch-based workflow like GitFlow, content creators can freely edit and create new posts on feature branches. When ready, they open pull requests to merge into the main branch.

This improves the overall experience:

- Content creators have maximum flexibility to write and publish quickly using Markdown. No wait times for editor load times.

- Developers don't have to maintain a complex WYSIWYG editor. They can focus on the CMS infrastructure and APIs.

- GitFlow streamlines collaboration and content approvals. Content goes through peer review before publishing.

So the combination of a CMS framework, Markdown, and GitFlow balances the needs of both content and development teams. Content creators gain publishing speed and flexibility. Developers gain infrastructure focus without editor upkeep. The result is a better CMS experience for everyone involved.

## Example Setup and Implementation

Here's an example of how a team could set up a CMS using a framework like Strapi, Markdown files for content, and GitFlow for version control and collaboration:

The CMS framework Strapi would be used to create a customizable backend with an API for content. The backend admin UI in Strapi allows you to configure content types, fields, relationships between content, and more.

Content creators would write posts and articles in Markdown format instead of a traditional WYSIWYG editor. The Markdown files are stored in a `content` folder in the repository.

Here's an example Markdown file for a blog post:

```
---
title: My Example Post
date: 2023-02-28
author: John Doe 
---

# My New Post

This is an example blog post written in Markdown. 

I can include text formatting like **bold**, *italics*, lists, etc:

- Item 1
- Item 2
- Item 3

And easily add images:

![Example Image](image.jpg)
```

For version control and collaboration, the developers and content creators would use a GitFlow workflow model. This provides separate `main`, `develop`, `feature`, and `release` branches.

Content creators can create a new feature branch to work on a post. When it's ready, they open a merge request to the `develop` branch. The changes are reviewed, then merged into `develop`. 

Periodically, the `develop` branch will be merged into `main` and a new release will be deployed.

This allows decentralized, collaborative editing of the Markdown content files while maintaining a full version control history.

The Strapi API serves the Markdown content to the front end website. When content is changed and deployed, the website is updated live.

So in summary, the CMS framework powers the backend API, Markdown provides an easy content authoring format, and GitFlow enables multi-user content workflows. Together this can create a streamlined CMS for developers and content creators!

## Benefits for Content Creators

With this approach, content creators are freed from dependence on developers and IT teams to make updates to the CMS and publishing process. They can focus on creating content without waiting for developer updates.

Some key benefits seen by content creators:

- **Faster publishing** - No need to wait for developer updates to the CMS admin and editing tools. Just write in markdown and commit changes to git. New posts go live right away.
- **Simple formatting** - Markdown is designed to be easy to read, write, and edit. No need to learn complex WYSIWYG editor tools. 
- **Track changes** - Since content is stored in git, you get built-in version control and can track changes over time. Revert anytime.
- **Take content with you** - Content is portable and not locked into one CMS. If you switch systems, you take your markdown files with you.
- **Focus on writing** - Without complex admin features to learn, you can focus on producing great content!

Overall, content creators have much more control and flexibility over the content creation process with this approach. Technical barriers are reduced, enabling writers to publish frequently with ease.

## Benefits for Developers

For developers, using markdown files and git workflows provides several key benefits compared to traditional CMS setups.

First, developers avoid spending significant time maintaining a complex WYSIWYG editor and dealing with its quirks across browsers. A markdown editor is much simpler, and any issues can be quickly fixed.  

Second, developers can focus their efforts on the underlying API, architecture, and overall flexibility of the CMS. Without worrying about editor plugins and toolbars, they have more time to work on performance, scaling, extensibility, and other technical priorities.

Third, implementing git workflows allows developers to streamline their processes around code collaboration, reviewing changes, testing, staging, and more. The entire team can work together following established git best practices.

Overall, using markdown separates content from presentation in a CMS, allowing developers to focus their skills where they are most valuable. The content team handles markdown, while developers work on the core CMS and APIs powering it. This division of responsibility helps each team play to their strengths.

## Drawbacks and Challenges

Implementing a Git workflow with markdown and a headless CMS does come with some potential drawbacks and challenges to consider:

- There can be an initial learning curve for content creators who are used to WYSIWYG editors to get used to writing in markdown. Markdown has a syntax that takes some time to learn and get comfortable with.

- Markdown lacks some of the editing and formatting capabilities of WYSIWYG editors. For example, there's no way to adjust font sizes, colors, or add other stylistic formatting. The formatting options are more limited compared to visual editors.

- Adding new developers to an existing Git workflow can disrupt the flow. New developers need to spend time understanding the branching model, commit messages, code review process, etc. There's a ramp up time to get familiar with the team's conventions.

- Developers lose the "safety net" of having content saved in a database. With markdown files stored in Git, faulty code merges or deletions have the risk of destroying content. Extra precautions need to be taken.

- The headless CMS may not have all the features of a traditional CMS. Since it's just providing an API, functions like user permissions, workflows, notifications, etc. may not be included or as fully featured.

- Without a WYSIWYG editor, there's an increased chance of formatting errors, broken links, malformed tables, etc. Technical errors are easier to catch visually.

While the learning curve and limitations require adjustment, many find the benefits outweigh these challenges. With more controlled content updates and peer-reviewed commits, the extra diligence pays off in site stability, security, and scalability.

## Conclusion

Using a CMS framework with markdown files and git workflows offers several advantages for improving collaboration between developers and content creators. By separating content from presentation and using markdown for authoring, content creators gain more flexibility and control over their work. They don't have to rely on developers to make changes or updates to the CMS templates and frontend. 

With markdown files stored in a git repository, developers also gain flexibility in deploying and rendering content separately from the frontend presentation. Content edits can be version controlled and merged into the main branch upon review. This enables more efficient collaboration between teams, allowing content creators to focus on producing great content while developers maintain the underlying CMS and infrastructure.

Overall, combining a CMS framework with markdown authoring and git version control streamlines workflows between developers and content creators. It enables teams to publish higher quality content faster and more efficiently. The improved collaboration and flexibility from this approach are clear advantages for organizations looking to scale their content production.