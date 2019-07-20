import React from "react"
import styled from "styled-components"

const StyledTools = styled.section`
  h2 {
    margin-bottom: 1.25rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
`
export default function Tools() {
  const currentTools = [
    <a
      href="https://www.apple.com/macbook-pro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      MacBook Pro
    </a>,
    <>
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visual Studio Code
      </a>{" "}
      editor
    </>,
    <>
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>{" "}
      hosting
    </>,
    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
      Docker
    </a>,
    <a
      href="https://github.com/robbyrussell/oh-my-zsh"
      target="_blank"
      rel="noopener noreferrer"
    >
      Oh My Zsh
    </a>,
    <>
      <a href="https://ghost.org/" target="_blank" rel="noopener noreferrer">
        Ghost
      </a>{" "}
      publishing platform
    </>,
    `Node`,
    <a
      href="https://www.robinwieruch.de/react-hooks/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Hooks
    </a>,
    <>
      <a
        href="https://www.git-tower.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tower
      </a>{" "}
      git client
    </>,
    <>
      <a
        href="https://www.spectacleapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spectacle
      </a>{" "}
      window control app
    </>,
    `Notion.so`,
    <a
      href="http://www.wasdkeyboards.com/index.php/products/mechanical-keyboard/wasd-v3-87-key-custom-mechanical-keyboard.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      WASD Keyboards
    </a>,
    <a
      href="https://github.com/facebook/create-react-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      create-react-app
    </a>,
    <a
      href="https://www.styled-components.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      styled-components
    </a>,
    `CSS Flexbox`,
    <>
      <a href="https://ngrok.com/" target="_blank" rel="noopener noreferrer">
        ngrok
      </a>{" "}
      localhost tunnel
    </>,
    `Let's Encrypt`,
    <>
      <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
        Prettier
      </a>{" "}
      code formatter
    </>,
    <>
      <a
        href="https://toggl.com/app/timer"
        target="_blank"
        rel="noopener noreferrer"
      >
        toggl
      </a>{" "}
      time tracker
    </>,
  ]

  return (
    <StyledTools>
      <h2>I'm currently enjoying</h2>
      <p>These tools (ordered randomly) greatly affect my daily work.</p>
      <ul className="box-list">
        {currentTools.map(tool => (
          <li key={Math.random()}>
            <div>{tool}</div>
          </li>
        ))}
      </ul>

      <h2 id="learning-hobbyist">Learning &amp; Hobbyist</h2>
      <ul className="box-list">
        <li>
          <a
            href="https://kubernetes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kubernetes
          </a>
        </li>
        <li>CSS Grid Layout</li>
        <li>VIM</li>
        <li>Go programming language</li>
        <li>React Native</li>
        <li>Wit.AI</li>
      </ul>

      <h2 id="the-arsenal">The Arsenal</h2>
      <ul className="box-list">
        <li>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          glorious JavaScript UI library
        </li>
        <li>
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{" "}
          React framework
        </li>
        <li>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>
        </li>
        <li>Express</li>
        <li>Contentful cloud CMS</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Google Cloud Platform</li>
        <li>Azure</li>
        <li>Git</li>
        <li>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          React framework
        </li>
        <li>Drupal CMS</li>
        <li>
          <a
            href="https://laravel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laravel
          </a>{" "}
          PHP Framework
        </li>
        <li>Cloudinary</li>
        <li>Heroku</li>
        <li>Sketch App</li>
        <li>Dialog Flow</li>
        <li>Cloudflare</li>
        <li>Angular 1.8</li>
        <li>Angular.js</li>
        <li>Grunt</li>
        <li>Gulp</li>
        <li>jQuery</li>
        <li>Microsoft's Bot Framework</li>
        <li>WordPress</li>
      </ul>
    </StyledTools>
  )
}
