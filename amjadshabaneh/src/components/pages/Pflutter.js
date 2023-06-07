import React, { Component } from 'react'
import Article from './Article'

export default class Pflutter extends Component {
  render() {
    return (
      <div>
        <Article title="Flutter" img="/images/Flutter.jpg"
        content=<p>
        Flutter is an open-source mobile application development framework created by Google. It allows developers to create high-quality, cross-platform apps for both Android and iOS devices using a single codebase.
            <br></br><br></br>
        One of the key benefits of Flutter is its fast development time. With Flutter, developers can build apps quickly and efficiently, thanks to its hot-reload feature that allows for real-time code changes and updates without the need for a full app restart. This saves developers valuable time and allows them to iterate on their apps quickly.
        <br></br><br></br>
        Flutter also boasts a rich set of customizable widgets, making it easy to create beautiful and engaging user interfaces. Developers can use pre-built widgets or create their own to create unique and dynamic user experiences. This flexibility allows developers to design and implement complex layouts with ease.
        <br></br><br></br>
        Another strength of Flutter is its performance. Flutter apps are written in the Dart programming language, which compiles to native code for both Android and iOS devices. This means that Flutter apps can run at native speeds and provide a smooth and responsive user experience.
        <br></br><br></br>
        Flutter also has a large and active community of developers, which has created a wealth of resources and tools for working with Flutter. There are many libraries and packages available that can help developers add features and functionality to their apps quickly and easily.
        <br></br><br></br>
        Flutter is also backed by Google, which provides support and updates to the framework. This ensures that Flutter will continue to evolve and improve over time, making it a safe and reliable choice for mobile app development.
        <br></br><br></br>
        In summary, Flutter is a powerful and flexible framework for mobile app development. Its fast development time, customizable widgets, and native performance make it an attractive choice for developers looking to create high-quality cross-platform apps. With a large and active community of developers and support from Google, Flutter is sure to continue to be a popular choice for mobile app development in the years to come.
        </p>
        />
      </div>
    )
  }
}
