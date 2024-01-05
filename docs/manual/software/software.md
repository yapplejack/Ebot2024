# Software (this is an example of what a section will look like directly from GDocs)

import Image from '@theme/IdealImage';

There was a lot wrong with the formatting in the google doc that was not fixed before importing. That being said there is not too much work to clean it up, mostly moving around some image ordering, centering some of them (an issue which should be resolved on the google doc end) and fixing some spacing. 

<br/>

This is probably the worst looking import so far thanks to my poor handling of lists and a high number of positioned images.

<br/>

Materials

<ul><li>Assembled control system, hopefully on the robot</li><li>USB A to B cable</li><li>Ethernet cable</li><li>Battery</li><li>Laptop </li></ul>

<ul><li>You&rsquo;re going to need admin access to download and install programs. Double check with your school IT department to get permission before installing software. The laptop included with the rookie kit of parts should have enough space to both program and operate the robot.</li></ul>

<p><br /> </p>

Instructions:

<p><br /> </p>

Go through the next sections in order. This will take you through installing all the software to deploying the starter code for Everybot.

<div style={{pageBreakAfter: 'always'}}></div>

<h1>Configuring Spark&nbsp;MAXes</h1>

<p><br /> </p>

To work with the Spark MAX motor controllers please download the <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.revrobotics.com/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client&amp;sa=D&amp;source=editors&amp;ust=1698869306125810&amp;usg=AOvVaw1ny9aXsReM03VjdowBmT7u">REV Hardware Client</a></span>. The linked website has all information needed to use the Spark MAX but we will go over some key points below.

<div style={{overflow: 'hidden', float: 'right', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '225.00px', height: '109.40px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_0.png")} style={{ width: '225.00px', height: '125.56px', marginLeft: '0.00px', marginTop: '-16.16px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '351.50px', height: '84.97px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_1.png")} style={{ width: '351.50px', height: '84.97px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



Interfacing with the Spark MAX is done through the USB-C slot, there is an included cable but its short length makes it annoying to use, so a better cable is a good purchase.

<p><br /> </p>

When working with Spark MAXes, especially when they use CAN, it is best practice to make sure all Spark MAXes have the newest firmware individually without the presence of other controllers in the CAN loop. This can be done simply by not powering on the robot and connecting to each controller individually via USB with the others off. When connected, open the REV Hardware Client and select the desired Spark MAX. Then navigate to the update tab and select download if there is a red Out-Of-Date triangle. Additionally there are some other settings to configure at this time.

<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '440.50px', height: '170.79px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_2.png")} style={{ width: '440.50px', height: '170.79px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<div style={{overflow: 'hidden', float: 'right', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.44px', height: '133.90px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_3.png")} style={{ width: '256.44px', height: '133.90px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<p><br /> <br /> <br /> </p>

There are many important settings that will impact the performance of your motor but we want to highlight the two most important settings: It is imperative that <span style={{ fontWeight: "700"}}>CAN ID</span>&nbsp;is set correctly. When Spark MAXes are declared in code they require a CAN ID to be initialized with, make sure the <span style={{ fontWeight: "700"}}>CAN ID</span>&nbsp;in the client matches the corresponding motor it is attached to. Consider labeling the motor controllers with a sticker indicating their CAN ID. The other important setting is <span style={{ fontWeight: "700"}}>Motor Type</span>, if you are using a Non-NEO motor this must be set to Brushed Motor, otherwise if using a NEO it should be REV NEO Brushless. When finished configuring the motor controller make sure to click the <span style={{ fontWeight: "700"}}>Burn Flash</span>&nbsp;button.<div style={{overflow: 'hidden', float: 'right', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.00px', height: '246.20px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_4.png")} style={{ width: '256.00px', height: '246.20px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

<h1>WPILib VSCode Setup</h1>

In order to begin programming your robot you will need to use WPILib&rsquo;s installer. This software will install VS Code, the default programmer environment tool which will allow you to write code for your FRC robot.

<p><br /> </p>

The official instructions can be found at the link below. This section is intended as extra information. <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html&amp;sa=D&amp;source=editors&amp;ust=1698869306127287&amp;usg=AOvVaw2Oo-adHOP4n80hn7cXsxXf">https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html</a></span>

<p><br /> </p>

Obtaining the WPILib Installer:

<ul><li>Download the WPILib&rsquo;s installer from the link above. Click the blue button to download for windows. If you are using a different operating system, you will be able to find a link to their github page where different versions are downloadable in the assets section.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '466.50px', height: '192.45px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_5.png")} style={{ width: '466.50px', height: '192.45px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<ul><li>Once the download is complete, launch the file explorer and find where the file was downloaded to. By default, the file should be at the top of the &ldquo;Downloads&rdquo; folder. To run the file you will need to <span style={{ fontWeight: "700"}}>right click</span>&nbsp;on the file and <span style={{ fontWeight: "700"}}>select the &ldquo;Mount&rdquo; option. </span>After mounting, double click on &ldquo;WPILibInstaller.exe&rdquo;.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '239.50px', height: '160.52px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_6.png")} style={{ width: '239.50px', height: '349.71px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<ul><li>You should see the following screen.<span style={{ fontWeight: "700"}}>&nbsp;Press &ldquo;Start&rdquo;</span>&nbsp;on this screen.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '347.01px', height: '232.50px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_7.png")} style={{ width: '347.01px', height: '232.50px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<ul><li>From here new users are encouraged to select &ldquo;Everything&rdquo; and &ldquo;Install for this User&rdquo;</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '380.57px', height: '255.75px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_8.png")} style={{ width: '380.57px', height: '255.75px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

<ul><li>On this screen we would recommend &ldquo;Download for this computer only (fastest)&rdquo;</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '517.12px', height: '345.95px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_9.png")} style={{ width: '517.12px', height: '345.95px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<ul><li>Once you get the following message &ldquo;Finished installing!...&rdquo; press the finish button.</li></ul>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

<h1>FRC Game Tools</h1>

The official instructions can be found at the link below. This section is intended as extra information.

<span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html&amp;sa=D&amp;source=editors&amp;ust=1698869306128634&amp;usg=AOvVaw1LUM-KQr__Zxbt2apMJeQv">https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html</a></span>

<p><br /> </p>

Special note for teams who have installed FRC Game Tools in the past:

<ul><li>In Windows go to &ldquo;Add or Remove Programs&rdquo; and uninstall &ldquo;NI Software&rdquo; <div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '365.43px', height: '125.33px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_10.png")} style={{ width: '365.43px', height: '125.33px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></li></ul>



<ul><li>Launch &ldquo;NI Package Manager&rdquo; <div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '376.50px', height: '106.08px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_11.png")} style={{ width: '402.59px', height: '175.07px', marginLeft: '-26.09px', marginTop: '-68.99px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></li></ul>



<ul><li>Click the circled radio box and then remove</li></ul>

<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '720.00px', height: '266.67px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_12.png")} style={{ width: '720.00px', height: '266.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Obtaining the FRC Game Tools installer:

<ul><li>Navigate to <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html%23473762&amp;sa=D&amp;source=editors&amp;ust=1698869306129746&amp;usg=AOvVaw3E9uT9AQSk6BqQowVSwP8j">https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html#473762</a></span>&nbsp;make sure the current year is selected and hit download offline.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '413.18px', height: '282.10px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_13.png")} style={{ width: '413.18px', height: '282.10px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<ul><li>After that, launch the program. <div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '337.50px', height: '205.91px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_14.png")} style={{ width: '337.50px', height: '205.91px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div> <div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '358.64px', height: '49.10px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_15.png")} style={{ width: '551.57px', height: '49.10px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></li></ul>

<p><br /> </p>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '385.59px', height: '160.10px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_16.png")} style={{ width: '385.59px', height: '160.10px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<ul><li>Continue hitting next and progressing through the following screens, making sure to accept when prompted.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '346.00px', height: '241.25px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_17.png")} style={{ width: '346.00px', height: '241.25px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '338.00px', height: '242.36px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_18.png")} style={{ width: '338.00px', height: '242.36px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '338.00px', height: '240.52px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_19.png")} style={{ width: '338.00px', height: '240.52px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> </p>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '348.50px', height: '248.23px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_20.png")} style={{ width: '348.50px', height: '248.23px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '346.00px', height: '249.59px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_21.png")} style={{ width: '346.00px', height: '249.59px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<ul><li>After waiting for some installs you should see the following, if you wish to use the Vision Development Module you can find instructions on how to activate your license in the green NI package that comes with <span style={{ backgroundColor: "#f1c232"}}>Season Specific Box</span>. We recommend just hitting cancel if you do not plan on using vision.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '608.50px', height: '438.63px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_22.png")} style={{ width: '608.50px', height: '438.63px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<ul><li>Reboot to finish the installation.</li></ul>



<div style={{overflow: 'hidden', float: 'left', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '332.50px', height: '239.68px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_23.png")} style={{ width: '332.50px', height: '239.68px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>



<p><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

<h1>Imaging RoboRIO 2.0</h1>

The official instructions can be found at the link below. This section is intended as extra information.

<span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/index.html&amp;sa=D&amp;source=editors&amp;ust=1698869306139482&amp;usg=AOvVaw3w-_SXBc3b3jG7-UFD6oSE">https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/index.html</a></span>

<p><br /> <br /> </p>

The National Instruments roboRIO 2.0 included with the rookie Kit of Parts has to be &ldquo;imaged&rdquo; with a known set of files before it can be used to run your robot. You must have completed the <span style={{ textDecoration: "underline"}}><a class="c8" href="#h.c4rlr5iviwt2">FRC Game Tools installation</a></span>&nbsp;and have your roboRIO connected to power from the Power Distribution Hub. For veteran teams with the original roboRIO, see the <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.wpilib.org/en/latest/docs/zero-to-robot/step-3/imaging-your-roborio.html%23imaging-your-roborio-1&amp;sa=D&amp;source=editors&amp;ust=1698869306139921&amp;usg=AOvVaw1lM4L-LiBrmIKop6R-MqW5">WPILib documentation</a></span>&nbsp;for instructions on imaging the roboRIO.

<p><br /> </p>

To image the roboRIO 2.0, the included 4 GB microSD card has to be inserted into a SD card reader in a computer. The Acer laptop included in the rookie Kit of Parts includes a built-in microSD card slot.

<p><br /> </p>

<ul><li>Take the microSD card and insert it into the computer you previously installed FRC Game Tools on.</li><li>Download and install <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://www.balena.io/etcher/&amp;sa=D&amp;source=editors&amp;ust=1698869306140329&amp;usg=AOvVaw3J7UJ56DDf264W2JqOpwGA">Balena Etcher</a></span>.</li><li>After installation is complete, launch Balena Etcher and select &ldquo;Flash from File.&rdquo;</li></ul>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '351.06px', height: '221.90px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_24.png")} style={{ width: '351.06px', height: '221.90px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<ul><li>Locate the FRC_roboRIO2_2023_v31.img.zip file. If FRC Game Tools is correctly installed, it should be located in C:\Program Files (x86)\National Instruments\LabVIEW 2020\project\roboRIO Tool\FRC Images\SD Images</li></ul>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '720.00px', height: '126.67px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_25.png")} style={{ width: '720.00px', height: '126.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

<ul><li>Balena Etcher may have automatically selected the microSD card as the target drive. If it did not, click &ldquo;Select target&rdquo; and pick the microSD card from the list of drives.</li></ul>

<ul><li>If you have a USB flash drive or other storage device plugged into the same computer, change the target to the microSD card. If the microSD card does not appear in the list of devices, try removing and reinserting it, or try a different SD card reader.</li></ul>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '492.79px', height: '311.95px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_26.png")} style={{ width: '492.79px', height: '311.95px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<ul><li>Click &ldquo;Flash!&rdquo; to copy the roboRIO 2.0 image to the microSD card</li></ul>

<ul><li>Imaging a device will erase whatever data is currently on it and replace it with the roboRIO 2.0 image files, so make sure the target device is your microSD card or you may accidentally erase important data on a different drive.</li></ul>

<ul><li>When Balena Etcher has finished writing the image to the microSD card, remove it from the computer and insert it into the microSD card slot on the roboRIO 2.0.</li></ul>

<ul><li>After Balena Etcher is done, WIndows may tell you that a new device needs to be formatted before it can be used. Click cancel on this window. The microSD card is now formatted in a way that the roboRIO 2.0 can understand but Windows can not.</li></ul>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '355.50px', height: '174.53px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_27.png")} style={{ width: '355.50px', height: '174.53px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<ul><li>Connect the roboRIO 2.0 to the computer using a USB cable plugged into the computer&rsquo;s USB port and the roboRIO 2.0&rsquo;s USB B port (the square-ish &ldquo;printer&rdquo; style port).</li><li>Launch the roboRIO imaging tool included with FRC Game Tools. After a little while, the imaging tool should identify the roboRIO as a valid target. If it does not, try a different USB port or cable.</li><li>Select the roboRIO in the target list. Fill out the &ldquo;Team Number&rdquo; box with your team&rsquo;s number and click &ldquo;Apply.&rdquo; You should now be able to connect to your roboRIO correctly either wired directly to a computer or wirelessly through a correctly configured radio to upload code and drive your robot.</li></ul>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

<h1>Deploying Starter Code</h1>

More documentation on connecting and deploying code can be found at the link below. This section contains more Everybot specific information.

<span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/running-benchtop-test.html&amp;sa=D&amp;source=editors&amp;ust=1698869306142003&amp;usg=AOvVaw0WqOfuTZ5vd3OpJV4aTmjj">https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/running-benchtop-test.html</a></span>

<p><br /> </p>

<ol><li>Ensure that you have completed the previous steps and have all of the necessary software installed.</li><li>Download a zip file of the Everybot 2023 code from the GitLab page:<a class="c8" href="https://www.google.com/url?q=https://gitlab.com/robonautseverybot/everybot-2022&amp;sa=D&amp;source=editors&amp;ust=1698869306142303&amp;usg=AOvVaw0a7swpZSI_9HuOS0ilsxvy">&nbsp;</a><span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://gitlab.com/robonautseverybot/everybot-2023&amp;sa=D&amp;source=editors&amp;ust=1698869306142396&amp;usg=AOvVaw3dXSxXkK3vJ9z4HISqofIq">https://gitlab.com/robonautseverybot/everybot-2023</a></span></li></ol>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '470.50px', height: '432.96px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_28.png")} style={{ width: '470.50px', height: '432.96px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<ol><li>Unzip the file and move to a reasonable location</li><li>Open the 2023 WPILib VS Code application you installed earlier</li><li>In 2023 WPILib VS Code, open the unzipped code folder</li></ol>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '202.52px', height: '169.10px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_29.png")} style={{ width: '202.52px', height: '169.10px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{ textAlign: 'center'}}>File Dropdown in WPIlib Vscode, open folder dialog circled</div>

<ol><li>Open the search bar at the top, type in set the team number, and set the team number as your team number</li></ol>

<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '720.00px', height: '82.67px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_30.png")} style={{ width: '720.00px', height: '82.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<div style={{ textAlign: 'center'}}>Set team number in search bar, Search button and set team number circled</div>

<ol><li>Double check the code before deploying to the robot. All of the starter code is in src/main/java/frc/robot/Robot.java. The other files contain software libraries to make everything work.</li><li>Double check to make sure that all the wiring has been completed. And that all of your CAN id&rsquo;s are set correctly for the motor controllers. You will encounter very strange behavior if the robot thinks the arm motor is actually a drive motor!</li><li>Power on the robot and connect the laptop you have been coding on to the roborio.</li></ol>

<ol><li>If your radio is configured and plugged in, join the wifi network with your team number. Otherwise, you can connect with an ethernet or usb cable.</li></ol>

<ol><li>Deploy robot code</li></ol>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '212.69px', height: '274.10px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_31.png")} style={{ width: '212.69px', height: '274.10px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{ textAlign: 'center'}}>Three dots dropdown, Deploy robot code circled </div>

<ol><li>Connect the Laptop you installed FRC Game tools on to the roborio</li></ol>

<ol><li>If you are coding on the laptop you installed FRC game tools on, skip this step</li><li>If you have two laptops and your radio running, both the laptops can be connected to the roborio at the same time</li></ol>

<ol><li>Open FRC driver station and wait for &ldquo;Tele-op Disabled&rdquo; rather than &ldquo;No Communications&rdquo;</li></ol>

<ol><li>Connecting will take a while, even if everything is right. It could also say &ldquo;No Communications&rdquo; because something is wrong. Be patient waiting for connection, but if no joy after 5 minutes, start troubleshooting. You may spend a bit of time troubleshooting here.</li></ol>

<ol><li>Find the USB section of the driver station. Push the buttons on your controller to figure out which buttons correspond to actions in the code. Button numbers start counting at 1.</li></ol>

<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '619.00px', height: '233.00px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_32.png")} style={{ width: '619.00px', height: '233.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<ol><li>Enable your robot in teleoperated mode and try to drive it.</li><li>If the robot is not behaving as expected, here are a couple things to try</li></ol>

<ol><li>Update everything to the latest version. You may see warnings about firmware versions being out of date in the driver station. See the section on configuring Spark MAX.</li><li>If mechanisms are moving in the wrong direction, change the motor invert settings. There are some comments in the code about this.</li><li>If mechanisms are moving too fast or slow, edit the settings variables in the &ldquo;magic numbers&rdquo; section of the code. There are comments about what these are. Ask in Discord if you need more assistance.</li></ol>

<ol><li>After you have tested teleoperated mode, try out the included autonomous modes. There are buttons to select the mode you want on the dashboard. Do nothing stays&nbsp;still and scores&nbsp;no points. It is provided as a safe default option. Cube and cone score one of that game piece in the high position directly in front of the robot and then back up slowly out of the community.</li></ol>

<ol><li>If the robot is moving too fast, too slow, too far, not far enough, change the settings variables in the code.</li><li>Practice changing when the robot moves. Your alliance partners may ask you to wait or hurry up to coordinate with their autonomous routines.</li></ol>

