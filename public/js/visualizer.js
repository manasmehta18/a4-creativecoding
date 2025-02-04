import { getCanvas, audioInit, audioGraph } from './setUpModule.js'
import { visualizer } from './visualizerModule'
import { info } from './infoModule'
import { lol } from './lolModule'
import * as dat from 'dat.gui'

const gui = new dat.GUI()

let currColor = 0

const blue = function () {
  currColor = 0
}

const green = function () {
  currColor = 1
}

const pink = function () {
  currColor = 2
}

const red = function () {
  currColor = 3
}

const changeParam = new function () {
  this.barHeight = 1
  this.barWidth = 4
  this.barFit = 2
  this.canvasClr = '#000000'
}()

const startMello = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/mello.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startAC = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/acdc.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startElectro = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/shelter.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startRamm = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/deutschland.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startInst = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/inst.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startBeat = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/exploder.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

const startDub = function () {
  const canvas = getCanvas()

  const jsonAudioInit = audioInit(canvas)
  const jsonAudioGraph = audioGraph(canvas, jsonAudioInit)

  jsonAudioInit.audioElement.src = '../media/dubstep.mp3'
  jsonAudioInit.audioElement.play()

  const results = new Uint8Array(jsonAudioGraph.analyser.frequencyBinCount)

  const draw = function () {
    window.requestAnimationFrame(draw)
    visualizer(canvas, jsonAudioInit, jsonAudioGraph, results, currColor, changeParam.barHeight, changeParam.barWidth, changeParam.barFit, changeParam.canvasClr)
  }
  draw()
}

window.onload = function () {
  document.getElementById('mello').onclick = startMello
  document.getElementById('rammstein').onclick = startRamm
  document.getElementById('electro').onclick = startElectro
  document.getElementById('instru').onclick = startInst
  document.getElementById('beats').onclick = startBeat
  document.getElementById('dubstep').onclick = startDub
  document.getElementById('acdc').onclick = startAC
  document.getElementById('blue').onclick = blue
  document.getElementById('green').onclick = green
  document.getElementById('pink').onclick = pink
  document.getElementById('red').onclick = red
  document.getElementById('infoBtn').onclick = info
  document.getElementById('lol').onclick = lol

  gui.add(changeParam, 'barHeight', 0, 3).name('Bar Height')
  gui.add(changeParam, 'barWidth', 0, 6).name('Bar Width')
  gui.add(changeParam, 'barFit', 0.5, 5).name('Visualizer Fit')
  gui.addColor(changeParam, 'canvasClr').name('Canvas Color')

  info()
}
