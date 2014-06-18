# React Font Awesome

Font Awesome is truely awesome - React is equally awesome!

View the [example](https://rawgit.com/karlmikko/react-font-awesome/master/example.html) to see it in action!

## Usage

### Spin
`<FASpinner spin='true' />` - `<i class='fa fa-spinner fa-spin'></i>`

### Fixed Width
`<FASpinner fw='true' />` - `<i class='fa fa-spinner fa-fw'></i>`

### List Item
`<FASpinner li='true' />` - `<i class='fa fa-spinner fa-li'></i>`

`<FAUl><li><FAChevronRight /> Item 1</li></FAUL>` - `<ul class='fa-ul'><li><i class='fa fa-chevron-right fa-li'></i> Item 1</li></ul>`

### Size
`<FASpinner size='lg' />` - `<i class='fa fa-spinner fa-lg'></i>`

### Rotate
`<FASpinner rotate='90' />` - `<i class='fa fa-spinner fa-rotate-90'></i>`

### Flip
`<FASpinner flip='vertical' />` - `<i class='fa fa-spinner fa-flip-vertical'></i>`

### Stack
`<FASpinner stack='2x' />` - `<i class='fa fa-spinner fa-stack-2x'></i>`

`<FAStack size='lg'><FACamera stack='1x'/><FABan stack='2x' className='text-danger'/></FAStack>` - `<span class='fa-stack fa-lg'><i class='fa fa-camera fa-stack-1x'></i><i class='fa fa-ban fa-stack-2x text-danger'></i></span>`

### Align
`<FASpinner align='left' />` - `<i class='fa fa-spinner fa-align-left'></i>`


## Extra Elements

`<FAIcon />` - `<i class='fa'></i>`

`<FAUl />` - `<ul class='fa-ul'></ul>`

`<FAStack />` - `<span class='fa-stack'></span>`

`<FAAnimate />` will animate children based on interval

interval = (int) time in ms for frame animation interval - default 1000

`<FAAnimate interval="500"><FAVolumeOff /><FAVolumeDown /><FAVolumeUp /></FAAnimate>`

This will animate between off, down, up every 500ms.

If no children are given then it will render `<span />`

## Icon List

All icons as of font-awesome version 4.1.0. [Font Awesome Icon List](http://fortawesome.github.io/Font-Awesome/icons/)

To use follow a camel-case naming convetion. 

Eg:

`<FAIcon />` - `<i class='fa'></i>`

`<FAEnvelopeO />` - `<i class='fa fa-envelope-o'></i>`

`<FASearchMinus />` - `<i class='fa fa-search-minus'></i>`

## License

The MIT License (MIT)

Copyright (c) 2014 Karl Mikkelsen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.