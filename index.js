var noise = require('./noise-gen.js'),
    envelope = require('./envelope.js')
;

function snare(ctx, freq, a, d, s, r){
  this.env = envelope(ctx, a,d,s,r);
  this.filter = ctx.createBiquadFilter();
  this.noise = noise(ctx, false, 2048);

  this.filter.type = "bandpass";
  this.filter.frequency.value = freq;

  this.filter.connect(this.env);
  this.noise.connect(this.filter);
  this.env.connect(ctx.destination);
}

snare.prototype.trigger = function(){
  this.env.trigger(0.025);
}

module.exports = function(AudioContext, opts){
  var defaults = {
    freq: 550,
    attack: 0.001,
    decay: 0.05,
    sustain: 0,
    release: 0.1
  };
  opts = Object.assign({}, defaults, opts);

  return new snare(AudioContext, opts.freq,
                  opts.attack, opts.decay, opts.sustain, opts.release);
}
