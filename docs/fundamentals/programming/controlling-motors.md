---
sidebar_label: 'Motor Controllers and Motors'
sidebar_position: 4
---

import Image from '@theme/IdealImage';


# Controlling Motors

TODO: improve pictures for sparkmax section, finish opening statement and decided whether to program the motors or not here and potentially look to heavily shorten this (step by step?) 

<br/>

The goal of this section is to allow you to control and verify the operation of your motors. Motors are controlled by motor controllers which require unique CAN IDs that are referenced in the code. When setting up our motor controllers we have the ability to assign these CAN IDs, ensure that the controller is setup to work with the connected motor and power the motor if appropriate.

<br/>

Later on you will want to test motors with code, to do this we will need to have installed the current version of WPILib, FRC Game Tools, the proper software for the motor controller and have updated the roboRIO with the newest imaged. 


<br/>

When setting up motor controllers is generally good practice to have a test bench or the electronics layed out on your uninstalled bellypan. See WPILib's [Introduction to FRC Robot Wiring](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html) for instructions on setting a test bench/ bellypan like the one shown below. If you are putting together an Everybot our Bill of Materials will have everything needed to create the Everybot's bellypan but may not have everything required to build their setup.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)'}}><Image autoLoad={"true"} img={require("/static/media/software/controlling-motors/layout-REV-1100.webp")} style={{ marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "700px"}}></Image></span></div></div>


## Setting up a Spark MAX

TODO: improve pictures for sparkmax section

To work with the Spark MAX motor controllers please download the [REV Hardware Client](https://docs.revrobotics.com/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client) if you have not done so already. We recommend using the [official documentation from REV](https://docs.revrobotics.com/sparkmax/gs-sm) but we will go over some key points below.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '351.50px', height: '84.97px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_1.png")} style={{ width: '351.50px', height: '84.97px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<br/>

Interfacing with the Spark MAX is done through the USB-C slot, there is an included cable but its short length makes it annoying to use, if you have a longer cable use it.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '225.00px', height: '109.40px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_0.png")} style={{ width: '225.00px', height: '125.56px', marginLeft: '0.00px', marginTop: '-16.16px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<br/>

The first goal with your SPARK MAXes will be to ensure they are [updated](https://docs.revrobotics.com/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client/updating-device-firmware). If you have not wired your robot or created a testbed then you will need to individually update them, this can simply be done by connecting to each SPARK MAX via USB-C. If you have a wired robot or testbed then you may be able to [update them all at the same time](https://docs.revrobotics.com/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client/updating-device-firmware#updating-multiple-devices-with-the-usb-to-can-bridge).

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.44px', height: '133.90px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_3.png")} style={{ width: '256.44px', height: '133.90px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '440.50px', height: '170.79px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_2.png")} style={{ width: '440.50px', height: '170.79px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /></p>

There are many important settings that will impact the performance of your motor but we want to highlight the two most important settings: 

<br/>

First you must make sure the <span style={{ fontWeight: "700"}}>[CAN ID](https://docs.revrobotics.com/sparkmax/gs-sm/connect-a-spark-max-over-usb#basic-setup-and-configuration)</span>&nbsp;is set correctly. When Spark MAXes are declared in code they require a CAN ID to be initialized with, make sure to change the <span style={{ fontWeight: "700"}}>CAN ID</span>&nbsp;in the client to match the desired motor in your code. Consider labeling the motor controllers with tape or stickers indicating their CAN ID. If you are unsure which motor controller you are modifying you can make the LED on the SPARK MAX blink via the button to the left of the <span style={{ fontWeight: "700"}}>CAN ID</span>. The CAN ID can be number from 1 to 63 and must be unique.

<br/>

The other important setting is <span style={{ fontWeight: "700"}}>[Motor Type](https://docs.revrobotics.com/sparkmax/gs-sm/connect-a-spark-max-over-usb#set-the-motor-type)</span>, if you are NOT using a NEO motor this must be set to Brushed Motor, otherwise if using a NEO it should be REV NEO Brushless. When finished configuring the motor controller make sure to click the <span style={{ fontWeight: "700"}}>Burn Flash</span>&nbsp;button.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.00px', height: '246.20px'}}><Image autoLoad={"true"} img={require("/static/media/software/image_4.png")} style={{ width: '256.00px', height: '246.20px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

If you would like to test your motor without the presence of code read through REV's [Make it Spin!](https://docs.revrobotics.com/sparkmax/gs-sm/connect-a-spark-max-over-usb). Pay special attention to the limiting current section and make sure to take proper precautions before running your motors. These precautions may include: 

<br/>

* Chocking the robot up with something sturdy such that no wheels can touch the floor if testing the drive train
* Making sure that hardstops are in place if the motor is connected to a mechanism can collide with the robot, floor or over-rotate
* Ensuring nobody is near the robot and alerting everyone the robot is about to be run 
* Verifying that the motor is wired correctly and the motor controller is setup for the motor
* Preventing the motor from moving if not connected to a mechanism

When a motor does not run or operate as expected it may be prudent to check the [Status LED](https://docs.revrobotics.com/sparkmax/status-led) of the SPARK MAX. Additionally you may want to checkout check out REV's [troubleshooting](https://docs.revrobotics.com/sparkmax/troubleshooting) section, read the rest of their documentation or reach out for help.

## Using code to run the motor

For this you will to need to have a testbed or robot wired up. Additionally you will need to have imaged your roboRIO, downloaded VS Code from WPILib and be able to connect to robot via wifi or the USB printer cable slot on the roboRIO. 

### Creating the project

<br/>

Start by opening VS Code, hitting the W in upper left hand corner, typing "Create a new project" and hitting enter.

<br/>

Image here

<br/>

In the first row of buttons select template, java and Timed Robot. Afterwords select a folder for the project, make sure create a new folder is checked and enter your team's number in the Team Number field. Click Generate Project.

<br/>

Image here

<br/>

### Adding vendordeps

If you are using a SPARK MAX motor controller we will need to install the proper vendor libraries. Follow the steps the steps for [REVLib's Online Installation](https://docs.revrobotics.com/sparkmax/software-resources/spark-max-api-information#c++-and-java). The "Download Latest JAVA API" button is for the offline installation and does not need to be clicked for the online installation.

<br/>

Images showing vendordeps installation

<br/>

### Declaring the motor controller

After installing the proper vendor libraries we can begin coding. In the explorer on the left side of the screen click "src", "java" then "Robot.java". This is the location where you will write the code for this example.

<br/>

Image here

<br/>

Feel free to type along with the code windows or copy and paste the code into the specified locations. We will start at the top of the file with some imports.

<br/>

	
```java
// Copyright (c) FIRST and other WPILib contributors.
// Open Source Software; you can modify and/or share it under the terms of
// the WPILib BSD license file in the root directory of this project.

package frc.robot;

import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMax.IdleMode;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;

import edu.wpi.first.wpilibj.TimedRobot;
import edu.wpi.first.wpilibj.smartdashboard.SendableChooser;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
import edu.wpi.first.wpilibj.Joystick;

```

<br/>

Next we will need to declare our motor controller in the Robot class, underneath the existing lines.

<br/>

```java
public class Robot extends TimedRobot {
  private static final String kDefaultAuto = "Default";
  private static final String kCustomAuto = "My Auto";
  private String m_autoSelected;
  private final SendableChooser<String> m_chooser = new SendableChooser<>();

  CANSparkMax m_testMotor = new CANSparkMax(1, MotorType.kBrushed);

```

<br/>

Lets break some things down here, here you may have added: "CANSparkMax m_testMotor = new CANSparkMax(1, MotorType.kBrushed);", this is known as a variable declaration (or more specifically an object declaration in this instance). Lets learn what each part of this line does: 

<br/>

| CANSparkMax                   | m_testMotor   | =      | new                         | CANSparkMax(1, MotorType.kBrushed) | ;                               |
| ----------------------------- | ------------- | ------ | --------------------------- | ---------------------------------- | ------------------------------- |
| Variable Type (or Class Name) | Variable Name | Equals | A new instance of the class | Class Constructor                  | semicolon which ends most lines |

<br/>

So here we create a variable named "m_testMotor" that holds an instance of the CANSparkMax class that has been initialized with the values "1" and "MotorType.kBrushed". To figure out what these values mean, you can hover your mouse over the "CANSparkMax" portion of the class constructor. You will see the first value will be your device ID, which in our case will be the CAN ID that you set for this motor controller in the REV hardware client. The second field will be "MotorType.kBrushed" if using a brushed motor or "MotorType.kBrushless" if using a NEO or NEO 550.

<br/>

### Declaring the controller

After the declaration of the motor controller we will add our Joystick:

<br/>

```java
public class Robot extends TimedRobot {
  private static final String kDefaultAuto = "Default";
  private static final String kCustomAuto = "My Auto";
  private String m_autoSelected;
  private final SendableChooser<String> m_chooser = new SendableChooser<>();

  CANSparkMax m_testMotor = new CANSparkMax(1, MotorType.kBrushed);

  Joystick j = new Joystick(0);
```

We just declared a Joystick with the name j that is connected to port 0. We will look at controller ports in a bit, 0 is good for now.

### Configuring the motor controller 



### Controlling the motor by holding a button

Next we will add some code to teleopPeriodic(), a function that will be called every 20 ms when the robot is player controlled: 

```java
  @Override
  public void teleopPeriodic() {
    if (j.getRawButton(8)) {
      m_testMotor.set(.5);
    }
    else {
      m_testMotor.set(0.0);
    }
  }
```

This code will check to see *if* button 8 on our controller is pressed. If that button is being pressed when the function is called the motor will be set to 50% speed. *Else* the button is not being pressed and motor will will be set to 0% speed. Motors can be set to values between (-1,1).

<br/>

### Finding button mappings

To figure out what button we need to press or the button we want to press, launch the FRC Driver Station. Plug in your controller, then in FRC Driver Station click on the USB icon in the bottom left hand corner. Select your controller, it should be in port zero, if it is not there you can click and drag it there. Once the controller has been clicked on, begin pressing buttons, you will see boxes light up on the left. They are ordered from top to bottom, then left to right, starting at the number 1. Once you have found button 8 or a button you would rather use to power your motor return to VS Code.

### Deploying code to your robot

Follow the instructions [here](https://docs.wpilib.org/en/stable/docs/software/vscode-overview/deploying-robot-code.html#building-and-deploying-robot-code) from WPILib. The robot must be on and connected to your device, for this step it may be easiest to connect to the roboRIO via USB printer cable or ethernet. If you get a build failure in the console, double check that there are no red blips on the right hand of your VS Code window, those will correspond to errors in your code. You may also need to build your code on wifi before deploying the code to the robot.

### Running the button press program

Before running your program think about what can go wrong, here are some good safety measures to start with: 

* Chocking the robot up with something sturdy such that no wheels can touch the floor if testing the drive train
* Making sure that hardstops are in place if the motor is connected to a mechanism can collide with the robot, floor or over-rotate
* Ensuring nobody is near the robot and alerting everyone the robot is about to be run 
* Verifying that the motor is wired correctly and the motor controller is setup for the motor
* Preventing the motor from moving if not connected to a mechanism

<br/>

Once the robot is ready to be run, follow the [instructions](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/running-test-program.html#tethered-operation) from WPILib to run your test program. From here you can read about [wireless operation](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/running-test-program.html#wireless-operation) in the linked instructions. You could also create a [drivetrain test program](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-test-drivetrain-program-cpp-java.html), making sure to select the REV tabs for the code and **changing the CAN ID/ MotorType** to reflect your setup.