.. _SubSystem-Notification-Gateway:

SubSystem Notification Gateway
==============================

Notification Gateway is a subsystem of Connection Services of the Automotive Data Center.
The Notification Gateway connects external Systems that are "Notified" when specific events
happen in the data center. They can subscribe to specific events based on criteria established
through the Notification Gateway. A snippet of code can run in the data center that
publishes events to the pubsub bus.


Use Cases
---------

*

.. image:: UseCases.png

Users
-----

* :ref:`Actor-User`

.. image:: UserInteraction.png

Uses
----

* :ref:`SubSystem-Notification-Gateway`

Interface
---------

* CLI - Command Line Interface
* REST-API -
* Portal - Web Portal

Logical Artifacts
-----------------

*

.. image:: Logical.png

Activities and Flows
--------------------

.. image::  Process.png

Deployment Architecture
-----------------------

.. image:: Deployment.png

Physical Architecture
---------------------

.. image:: Physical.png

