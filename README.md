# Datatypes
## 1. Class / Topic
* Contains the shape of theory constructed with a combination of 
* Descriptors, whose values change among Topics can be also specified
* Classes have to inherit from another Class
* Most Outermost Classes, which are not inherited by another Class are called Topics. They are the most practical while Classes which are high up the Hierarchy are the most abstract.
* 
### Structure

* Attributes (what descriptors define the topics)
    * Skeleton Attribute: Copied from Parent Class 
    * Extended Attribute: differentiates this Class from the parent
        * ProCon Attributes: At the end of a chain and/or equipped with positivity Scale
        * Element Attribute: Value is a List of Partitions, Descriptor is the Name of the Partioning
        * Normal Attribute: Describes a characteristic of this Class, which is not linked with another Class or Attribute   
* Group: Defines the name of the Group, in case it is not a Topic
### Derived Data (external)
* Visualization out of Combinations (Every Combination that includes this Class) 
* Definition

### Examples
* Topic: Make or buy decision, Parents: theoretical Action > Decision
* Topic: MERN Stack
* Class: Webframework, Group: Webframeworks

## 2. Function
Describes the kind of relation between two Classes or Attributes

### Structure
* functionName: String
* forwardText: String
* backwardText: String 

### Types

* General
    * Is ()
    * Save ()
    * Provide ()
    * Solve (finds a solution for a problem)
    * decide (decide between alternatives)
* Numeric
    * increase
    * decrease 

* Math (LateX and other languages as inspiration)
    * add
    * subtract
    * divide
    * multiply 
* Causal
    * causes/is caused by
    * results in / is a Result of

* Boolean
    * and
    * or
    * not
* Compare Helper Function
    * Pendant (x to y like a to b)
    * Opposite (to x in )
## 3. Attribute
Consist of a Descriptor and a Value. Each Descriptor holds multiple Values on different Scales.

### Example

* Descriptor: Colour, Value: Blue, Scale: Ordinal
* Descriptor: Weight, Value: 100, Scale: Ratio

### 4.1 Descriptor
### 4.2 Value
### 4.3 Scale

* can be either one of ratio, ordinal or nominal with descending interpretability.
* to compare Descriptors of Topics, they have to match the Same Descriptor (Scale is optional)

### Ratio

* Unit (km, kg, s...)
* positive_is_up (true, false)

### Ordinal
### Nominal

# 4. Combination

3 Tuple of either Class or Attribute which are connected by a function.
The combination itself can be described with an Attribute.
A Combination describes what (Class, Attribute) and how (Function) they are connected.

### Structure
* Input: Class, Attribute
* Output: Class, Attribute
* Function: Function
* conjunction: String (And/or)
* attributes: [Attribute]

### Forms
With descending Impact

* Class + Class
    * Price Cap solves Market Instability
* Class + Attribute / Attribute + Class
    * Price Cap solves Attribute of Market Instability
    * Attribute of Price Cap solves Market Instability
* Attribute + Attribute
    * Attribute of Price Cap solves Attribute of Market Instability

# Motivation for the Website

## Problems

* Redundant Information 
* Accessibility & Presence of any information is no problem, whereas the context is

## Principles

* fast to grasp
    * on point visual definitions
    * reason for existance of every topic is made clear initially
    * Class - Topic approach simplifies jumping between theoretical knowledge (Definition) and empirical knowledge(Examples)  

* DRY and on point
    * In each topic exists only one definition for every language
    * Most basic vocabulary, no fancy technical terms
* (de-)structured
    * Every Entitity down to a single word is nested/connected in a massive ontology in the background
* versatile
    * Every Entity can be compared, visualized or processed in any desired way
    * No restriction to one-dimensional and redundant syntax of a natural language
* automized
    * visualization, hierarchy trees and text definitions get generated automatically
    * Inheritance of Classes
* fun
    * focusing on single elements of a definition and drawing them is most likely a better experience than cramming everything in one sentence
* open source
    * from scientists for scientists, in exchange for a small favour for us to keep the servers running,
    the database is yours
    * there are many ways to contribute, beeing the most obvious: extending the database. Please refer to our guidelines if you want to become a writer

Want to become an author? Start here
Still not convinced that this should be thing? Write us

## Motivation

### History of Information Exchange

* Regarding only one to one relationships
* Precision of Information increases in each step
1. Gestures/Facial Expression 
2. Speech 
3. Writing & Reading & Listening => Uncoupling of information from source => one carrier, still bound to location and time
  1. Saving possible
4. Internet => Uncoupling carrier from location and time
  1. Oral and visual senses can be transmitted, still lacking with feeling and smelling 
  4. Rapid Exchange = Almost uncoupling information from carrier, Source === Sink
  5. Filtering  = Only relevant information is transmitted
5. Processing => Uncoupling information from structure
  1. (Analysing, Interpreting, Predicting, Translating) Sent Information is has no distinct form and  is adapting to its location
  2. No overhead: Information exists in it's rawest and most relevant form


### Comparison of Natural Language with Maths
https://link.springer.com/chapter/10.1007/978-3-658-19567-0_8

Type | Natural Language| Maths
--- | --- | ---
Smallest entities | no combination, may be a combination ("busdriver") | no combination
Variables/Placeholders | A combination of entities ("the above mentioned patterns..") | one predefined entity ("x = 45") 
Semantic connection between entities | combination (Verbs/Conjunctions) | combination (Operators)
Grouping | combination (Sentences, Paragraphs) | combination (Formula)
Optimized Transfer Channel | Speech | Text
Transfer Size (s) | comforteably sliced chunks (~small) with Repetitions, Variance |  most efficient Size (whole Groups/Formulas) and no redundancy (~large) 
Transfer Time (t) | slow Pace with Breaks | most efficient Speed (~infinity) without breaks/condensed
Transfer Speed (v) | "Slow" | "fast"
Information intake for human learners | High (Can be grasped in most cases initially) | Low (Has to be repeated manually to understand)
Information intake for AI learners | Low (Has to filter out redundancies, evaluate meaning and weight Importance of entities itself) | High (necessary information is accessible and genuine with minimal preprocessing)
Reusability, reprocessing (visualizing) and integration | Low | High


### Conclusion

In order to understand information for the average human learner* the most favourable shape is in form of natural text. However to save and reuse information, to visualize it, to evaluate all possible connections, or for an intelligent machine to learn efficiently, this information needs to be destructured to smallest bits.

What this project tries to achieve is to create a database which contains information along three maximized principles:
* destructured
* integrated
* DRY


Goal: Transmission/Saving Information in small chunks and at slow Speed and with repetitions/redundancy (Reading/Talking)  <---> Transmission/Saving of Information in big chunks at high speed with no redundancy