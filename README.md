gifTastic: A Giphy quick query tool

## CONTENTS
A) Introduction
    - What is this?
    - Why?
    - How do I use it?
    - Help?
    - Contributions
B) On the to-do list
C) Original documentation for this assignment project

## A) Introduction

1. WHAT IS THIS?
    * This gifTastic page allows users to search for and quickly display gifs on the screen based on entered topics.
        * For this project, the Giphy API is used. This means that every search will be querying and obtaining results from the Giphy site.

2. WHY?
    * Gifs are fun. This is a quick and lightweight way of grabbing a handful of gifs based on keywords.

3. HOW DO I USE IT?
    * You can either go to adamwgrise.github.io/gifTastic to access a published version of the page, or you can simply download these files and open the "index.html" file in the root folder.

4. HELP?
    * You can email me at adamwgrise [at] gmail [dot] com if you have questions.

5. CONTRIBUTIONS
    * So far, just me!

## B) On the to-do list

Basic goals:
- [x] Need to have a library of buttons up top populating based on an input and submit (array of animals, loop through to make buttons)
- [x] The buttons need to pull a group of 10 gifs from the giphy api and prepend them to the page (not overwrite).
- [x] The gifs need to be clickable, so they start as a freeze image and "play" when clicked, then "pause" again when clicking another time.
- [ ] Look at giphy parameters: q, limit, rating
- [ ] Look at YouTube links from Haydn:
        https://www.youtube.com/watch?v=Kp7Xy2LScLM
        https://www.youtube.com/watch?v=K1JDUkF94cs
        https://www.youtube.com/watch?v=UVBmX4cZkHY
        https://www.youtube.com/watch?v=PDD8NV3sbZo
- [x] Giphy api key for Adam: xyrnqWXfU1VtQMLv35efwBKSnFDbth66
- [x] Use the HTTPS protocol in the query URL, as that's the best way to guarantee it'll work reliably in Github Pages.
- [ ] Submit github repo, github pages, and add to portfolio.
    
Bonus goals:
- [ ] Each gif should have a download button that works for any device type.
- [ ] Mobile-responsiveness
- [ ] Additional APIs like OMDB or Bands In Town.
- [ ] Add a favorites section for users that persists even when a new topic is selected.
    - [ ] Added challenge - save via localStorage or cookies so favorites persist even on page reload.


## C) Original documentation for this assignment project

_,.-~^*'`'*^~-.,_,.-~^*'`'*^~-.,_,.-~^*'`'*^~-.,_,.-~^*'`'*^~-.,_
`'*^~-.,_,.-~^*'`'*^~-.,_,.-~^*'`'*^~-.,_,.-~^*'`'*^~-.,_,.-~^*'`

### Overview

In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

![GIPHY](Images/1-giphy.jpg)

### Before You Begin

1. **Hit the GIPHY API**.
   * Fool around with the GIPHY API. [Giphy API](https://developers.giphy.com/docs/).
   * Be sure to read about these GIPHY parameters (hint, hint):
     * `q`
     * `limit`
     * `rating`
   * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).
   * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.

2. **[Watch the demo video](https://youtu.be/BqreERTLjgQ)**

   * You should have a high-level understanding of how this assignment works before attempting to code it.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Instructions

1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

2. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

7. Deploy your assignment to Github Pages.

8. **Rejoice**! You just made something really cool.

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Bonus Goals

1. Ensure your app is fully mobile responsive.

2. Allow users to request additional gifs to be added to the page.
   * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.

4. Include a 1-click download button for each gif, this should work across device types.

5. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio

6. Allow users to add their favorite gifs to a `favorites` section.
   * This should persist even when they select or add a new topic.
   * If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
