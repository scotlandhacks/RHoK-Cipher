# Cyber Security Challenge UK Cipher
The present browser-based cipher challenge, developed for the [Cyber Security Challenge UK](https://cybersecuritychallenge.org.uk/), is designed to be flexible enough to last for many years to come and to be used in many different challenge environments. The basic program allows for new ciphers to be created and for ciphers to be rearranged in ways that are engaging for their target audiences as stories as well as puzzles. 

The default setup for the cipher challenge if you download it directly from the master branch of this repository is suitable for young people aged 9 to 11. Different ciphers, or different story-line versions of the present cipher pages, can be slotted into place to make the challenge suitable for ages through adult.

## Usage
* To use the cipher challenge, download the zip file and unpack it onto a USB drive. 
* From a modern browser, open the records.html file from the USB and click the "clear records" button to make sure that there is no stray data in localStorage before the challenge begins, then close records.html.
* In the same browser tab, open the index.html file. 
You are now ready for participants to play the challenges.

* At the end of the session or the day, open records.html once again.
* Write a name for your records file in the text box and click "Save text to file". (example: "cheltenhamScienceCipherLaptop1" for the records saved from laptop 1 at the Cheltenham Science Festival)
* If the file was saved to the computer's "Downloads" file, make sure to move it to your USB disk so that you can take it back to the office!
* The records are now saved into an HTML file. (Coming soon: save to csv)
* Click the "Clear Records" button to make sure that the personal data of the participants is cleaned off the computer's memory.


##Extending the program
Create new ciphers using the cipher-template.html file. The template is a self-documented tool for creating new cipher challenges. Follow the directions in the comments of cipher-template.html to connect your own HTML5/jquery/javascript cipher challenge into the tracking mechanisms of the full program.

Use pageOrder.js to list the pages that you want to run in the correct order. The first page (pages "0") should always be index and the last page should always be "done".  

## Authoring History
This application was first created by an unknown coder at [PWC](http://www.pwc.com) in support of the Cyber Security Challenge UK in (year?). 

In 2012, the Challenge asked [Paul Mason](https://github.com/pdm126) to alter the code so that it could be re-used. The challenge was to add a mechanism to save the data about participants and their success rate without requiring a server connection. Everything had to be self-contained and run on a single USB disk plugged into any computer with a web browser. Paul consulted with [Lisha Sterling](https://github.com/lishevita), and together they came up with a solution that would run successfully at the Cheltenham Science Festival.

Building on that success, Paul suggested to Cyber Security Challenge UK that the project could be greatly improved with the help of designers and coders involved in the [Random Hacks of Kindness Cybersecurity Special Event in Glasgow in September 2013](http://scotlandhacks.org.uk/content/random-hacks-kindness-cybersecurity-event-report). At that event, "Team Fairycakes" created new code for more interactive challenges, more appealing designs, and [a suggested story line](http://scotlandhacks.org.uk/content/rhoksec-cipher-challenge) for a complete challenge aimed at students aged 9 to 11.

After RHoKsec, work was continued by [Andrew Gil](https://github.com/ZephrFish), Lisha, and Paul to bring the project to its current state.
