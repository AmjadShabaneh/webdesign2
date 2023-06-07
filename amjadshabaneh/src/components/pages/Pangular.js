import React, { Component } from 'react'
import Article from './Article'

export default class Pangular extends Component {
  render() {
    return (
      <div>
        <Article title="Angular js" img="/images/Angula.jpg"
        content=<p>
        Angular is a popular open-source front-end web application development framework. It was created by Google in 2010 and has since become one of the most widely used frameworks for building single-page applications (SPAs) and dynamic web interfaces.
            <br></br><br></br>
           One of the key features of Angular is its component-based architecture. Angular components are reusable building blocks that allow developers to create complex applications quickly and efficiently. Each component encapsulates its own behavior, styles, and HTML templates, making it easy to manage and maintain the application.
        <br></br><br></br>
        Another advantage of Angular is its dependency injection system. This system makes it easy to manage dependencies between components and services, and to ensure that each component has access to the data and services it needs to function.
        <br></br><br></br>
        Angular also includes a powerful set of tools and features for building complex applications. For example, it includes built-in support for reactive programming, which allows developers to create responsive and scalable applications that can handle large amounts of data.
        <br></br><br></br>
        Additionally, Angular has a large and active community of developers, which has created a wealth of resources and tools for working with the framework. There are many libraries and modules available that can extend Angular's capabilities and make it easier to work with.
        <br></br><br></br>
        One of the challenges of working with Angular is its steep learning curve. Angular is a complex framework with many concepts and features to master, and it can take some time for developers to become proficient in using it. However, the effort is often worth it, as Angular provides a powerful set of tools and features for building complex and scalable web applications.
        <br></br><br></br>
        In summary, Angular is a powerful and flexible framework for building web applications. Its component-based architecture, dependency injection system, and reactive programming support make it an attractive choice for developers looking to create dynamic and scalable applications. With a large and active community of developers and a strong backing from Google, Angular is sure to continue to be a popular choice for web application development in the years to come.

        </p>
        />
      </div>
    )
  }
}
