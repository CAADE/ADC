# Automotive Data Center (ADC)
Automotive Data Center is a reference architecture that targets application
developers, system operstators, stack developers that connect vehicles, edge,
and data centers across the automotive industry ecosystem.

This repository contains the design and a simple interactive reference architecture of the design.
Which can be found on the [read the docs](http://adc.readthedocs.io)

An implementation of the reference architecture is written using [sailsjs](http://sailsjs.org/) a nodejs MVC framework.


## Design

The design uses [plantuml](http://plantuml.com/) and [rst](http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html)
to document the architecture.

Plantuml is a text based language that lets you describe UML diagrams. 
All of the plantuml graphic files are shown in the *.md (markdown language files). 
In order to see the graphical representation of the uml files you have to generate *.png files.
To generate the graphic files (*.png) for the plantuml files (*.puml) do the following:
```
# npm run-script design
```
