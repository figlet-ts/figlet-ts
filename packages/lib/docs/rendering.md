# Rendering Pipeline

1. Parse an string into InputTokens (words, spaces and newlines)
2. Create a DisplayCanvas with a width of renderWidth and a single SubCanvas as the current (and only) line
3. Iterate through each character of each InputToken and add to the current line.  Once a character has been added and kerned/smushed, check if the line is longer than the requested canvas.renderWidth:
    1. If currentLine.width > canvas.renderWidth then 

<style rel="stylesheet">
displaycanvas {
   display: flex;
   flex-flow: column wrap;
   align-items: flex-start;
   background-color: #fff4c2;
   padding: 10px;
   gap: 10px;
}
subcanvas {
   display: flex;
   flex-grow: 0;
   flex-shrink: 1;
   justify-content: left;
   background-color: skyblue;
   gap: 1px;
   flex-wrap: wrap;
   padding: 0;
   margin: 0;
}
subcanvasline {
   display: flex;
   flex-grow: 0;
   flex-shrink: 1;
   justify-content: center;
   background-color: seashell;
   gap: 1px;
   padding: 0;
   margin: 0;
}
fc {
   flex-shrink: 1;
   min-width: 20px;
   font-size: 300%;
   border: 1px dashed black;
   text-align: center;
}
char {
   font-family: monospace;
   font-weight: bold;
   border: 1px solid lightgray;
   width: 18px;
   height: 30px;
   background-color: #eeeeee;
   line-height: 30px;
   padding: 0;
   margin: 0;
   vertical-align: center;
   text-align: center;
}
.title {
   width: 100%;
   font-weight: bold;
   text-align: center;
}

</style>

<displaycanvas>
   <div class="title">Canvas</div>
   <subcanvas>
<subcanvasline><char> </char><char>_</char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char> </char><char>_</char><char> </char><char> </char><char> </char></subcanvasline>
<subcanvasline><char>|</char><char> </char><char>|</char><char>_</char><char> </char><char>_</char><char>_</char><char>_</char><char> </char><char> </char><char>_</char><char>_</char><char>_</char><char>|</char><char> </char><char>|</char><char>_</char><char> </char></subcanvasline>
<subcanvasline><char>|</char><char> </char><char>_</char><char>_</char><char>/</char><char> </char><char>_</char><char> </char><char>\</char><char>/</char><char> </char><char>_</char><char>_</char><char>|</char><char> </char><char>_</char><char>_</char><char>|</char></subcanvasline>
<subcanvasline><char>|</char><char> </char><char>|</char><char>|</char><char> </char><char> </char><char>_</char><char>_</char><char>/</char><char>\</char><char>_</char><char>_</char><char> </char><char>\</char><char> </char><char>|</char><char>_</char><char> </char></subcanvasline>
<subcanvasline><char> </char><char>\</char><char>_</char><char>_</char><char>\</char><char>_</char><char>_</char><char>_</char><char>|</char><char>|</char><char>_</char><char>_</char><char>_</char><char>/</char><char>\</char><char>_</char><char>_</char><char>|</char></subcanvasline>
</subcanvas>
   <subcanvas>
      <fc>F</fc>
      <fc>i</fc>
      <fc>g</fc>
      <fc>l</fc>
      <fc>e</fc>
      <fc>t</fc>
      <fc> </fc>
      <fc>R</fc>
      <fc>u</fc>
      <fc>l</fc>
      <fc>e</fc>
      <fc>s</fc>
      <fc> </fc>
   </subcanvas>
   <subcanvas>
      <fc>S</fc>
      <fc>u</fc>
      <fc>b</fc>
      <fc>c</fc>
      <fc>a</fc>
      <fc>n</fc>
      <fc>v</fc>
      <fc>a</fc>
      <fc>s</fc>
      <fc> </fc>
      <fc>T</fc>
      <fc>w</fc>
      <fc>o</fc>
      <fc> </fc>
   </subcanvas>
   <subcanvas>
      <fc>S</fc>
      <fc>u</fc>
      <fc>b</fc>
      <fc>c</fc>
      <fc>a</fc>
      <fc>n</fc>
      <fc>v</fc>
      <fc>a</fc>
      <fc>s</fc>
      <fc>W</fc>
      <fc>i</fc>
      <fc>t</fc>
      <fc>h</fc>
      <fc>A</fc>
      <fc>L</fc>
      <fc>o</fc>
      <fc>n</fc>
      <fc>g</fc>
      <fc>W</fc>
      <fc>o</fc>
      <fc>r</fc>
      <fc>d</fc>
   </subcanvas>
</displaycanvas>