import React, { Component } from 'react'
import classnames from 'classnames'
import Reveal from 'reveal.js'
import Rythm from 'rythm.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/blood.css'
import logo from './rythmjs.png'
import Slide from './Slide'
import Intro from './Intro'
import How from './How'

const rythm = new Rythm()
rythm.plugMicrophone()
rythm.start()
rythm.addRythm('speaker', 'jump', 0, 50, {
  min: -5,
  max: 5,
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: false,
    }
  }

  componentDidMount() {
    Reveal.initialize()
    Reveal.addEventListener('slidechanged', event => {
      this.onSlideChange(event)
    })
  }

  onSlideChange(event) {
    console.log('coucou', event)
  }

  slideInSpeaker = () => {
    this.setState({
      center: true,
    })
  }

  slideOutSpeaker = () => {
    this.setState({
      center: false,
    })
  }

//   <Slide>{"J'en parle aux gens conseil publication au cazou"}</Slide>
//   <Slide>{"Création d'une Page de démo"}</Slide>
//   <Slide>{'EchoJS + JavascriptKicks + hackernews'}</Slide>
//   <Slide>{'Petit succès => 30stars'}</Slide>
//   <Slide>
//     <blockquote>
//       Alternative title: <br />
//     How to Annoy Your Users Part 1: <br />
//   Auto Playing Sound
// </blockquote>
// </Slide>
// <Slide>
//   <h1>{'THE END v2.0 ?'}</h1>
// </Slide>
//
// <Slide>{'Plug-in atom => RennesJS'}</Slide>
// <Slide>{'EchoJS - Javascript kicks'}</Slide>
// <Slide>{'Trending github'}</Slide>
// <Slide>{'150Stars !'}</Slide>
// <Slide>{'Idée = issue github'}</Slide>
// <Slide>{'Pr de Egoist'}</Slide>
// <Slide>{'1 mois plus tard => 550stars'}</Slide>
// <Slide>
//   {'Tentage de V2 => Nouvelle page de démo, EchoJS + JSKick'}
// </Slide>
// <Slide>
//   <h1>{'THE END v3.0 ?'}</h1>
// </Slide>
// <Slide>{'6 mois plus tard : Septmbre 2017'}</Slide>
// <Slide>{'Ancien post Reddit'}</Slide>
// <Slide>{'Relance EchoJS/Reddit'}</Slide>
// <Slide>{'hackerNews : show HN'}</Slide>
// <Slide>{"FLOP :'('"}</Slide>
// <Slide>{'ou pas !'}</Slide>
// <Slide>{'+180 HN => +300 stars'}</Slide>
// <Slide>
//   {'Trendings github => 4ème catégorie JS tweet blablabla'}
// </Slide>
// <Slide>{"L'évenement Poki"}</Slide>
// <Slide>{'SUCCESS'}</Slide>
// <Slide>{'THE END v4.0 ?'}</Slide>
// <Slide>{'Nouvel objectif'}</Slide>
// <Slide>{'Refacto => Guide de contribution'}</Slide>
// <Slide>{'PRs'}</Slide>
// <Slide>{'Shoutout aux contributeurs'}</Slide>
// <Slide>{'Au total 33 pr'}</Slide>
// <Slide>{'The  END v5.0 ?'}</Slide>
// <Slide>{'TO BE CONTINUED'}</Slide>
// <Slide>{'Clonclusions ?'}</Slide>
// <Slide>{'Trouver des leviers pour atteindre les trendings'}</Slide>
// <Slide>
//   {"Démo rapide et avec de l'impact pour accrocher les gens"}
// </Slide>
// <Slide>{'Persever !!! #THEEND Pousser la chance.'}</Slide>
// <Slide>
//   <h2>{"N'abandonnez pas vos idée"}</h2>
// </Slide>
// <Slide>
//   <h2>{'Après tout... Et pourquoi pas ?'}</h2>
// </Slide>
  render() {
    return (
      <React.Fragment>
        <div className="reveal">
          <div className="slides">
            <How />
            <Slide>
              <h2>Et pourquoi pas...</h2>
              <img src={logo} />
            </Slide>
            <Intro />
          </div>
        </div>
        <div
          className={classnames('speaker', {
            center: this.state.center,
          })}
        >
          <div className="rythm-medium" />
        </div>
      </React.Fragment>
    )
  }
}

export default App
