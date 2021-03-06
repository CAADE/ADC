.. _Actor-Automobile:

Automobile
==========

This is a automobile that has been registered to a Automotive Data Center. It will send
telemetry from the car to the ADC every minute. The size of the telemetry package can
vary but should be around 200K Bytes per message.

Use Cases
---------

* :ref:`UseCase-Register-Car`
* :ref:`UseCase-Deregister-Car`
* :ref:`UseCase-Switch-Data-Center`
* :ref:`UseCase-Transmit-Telemetry`

.. image:: UseCases.png

Activities
----------

When a car is driving it will send telemetry about the conditions of the car's sensors once
every minute. The estimated packet size is about 200K. There are times when the car will
have to switch from one data center to another. This may include moving across geographical
boarders, downtime or congestion in a data center etc... This should be handled from
data transport layer of the system.

.. image:: Activity.png

Workflow
--------

.. image:: Workflow.png

User Interface
--------------

TBD

Command Line Interface
----------------------

:ref:`UseCase-Register-Car`
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: none

    # adc car register --url <url>

:ref:`UseCase-Deregister-Car`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: none

    # adc car deregister --url <url>

:ref:`UseCase-Switch-Data-Center`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: none

    # adc car switch-data-center --url <url> --data-center <new data center>

:ref:`UseCase-Transmit-Telemetry`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: none

    # adc car transmit --url <url> --file <transmit file>

