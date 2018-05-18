.. _UseCase-Telematics:

Telematics
==========

Telematics gathers telemetry from the cars and stores them in the data center so
applications can harvest valuable information from the data.

Actors
------

* :ref:`Actor-Alert-Systems`
* :ref:`Actor-Automobile`
* :ref:`Actor-External-Systems`

Activities
----------

.. image:: Activities.png

* _Activities_

Detail Scenarios
----------------

* Car Moving between Data Centers

Car Moving between Data Centers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As cars move between geographical boundries the cars connectivity move between data centers.
The system needs to be able to keep data in specific geos according to different lawws
and regulations on where the data was collected. Aggregation between the data centers
is important but keeping the data in specific data centers is important as well.

.. image:: Car-Moving-Between-DC.png

.. toctree::
   :glob:
   :maxdepth: 1

   Scenario*

Systems Involved
----------------

* :ref:`SubSystem-Connected-Car-Cloud`
* :ref:`SubSystem-Connection-Services`
