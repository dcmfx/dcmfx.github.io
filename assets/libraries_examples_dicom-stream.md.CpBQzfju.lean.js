import{_ as n,c as p,j as i,a as s,G as h,w as k,B as l,o as E}from"./chunks/framework.CQS5UjL2.js";const D=JSON.parse('{"title":"Example: Stream DICOM File","description":"","frontmatter":{},"headers":[],"relativePath":"libraries/examples/dicom-stream.md","filePath":"libraries/examples/dicom-stream.md"}'),r={name:"libraries/examples/dicom-stream.md"};function d(g,a,y,F,c,o){const t=l("PluginTabsTab"),e=l("PluginTabs");return E(),p("div",null,[a[2]||(a[2]=i("h1",{id:"example-stream-dicom-file",tabindex:"-1"},[s("Example: Stream DICOM File "),i("a",{class:"header-anchor",href:"#example-stream-dicom-file","aria-label":'Permalink to "Example: Stream DICOM File"'},"​")],-1)),a[3]||(a[3]=i("p",null,"The following code reads a DICOM P10 file in streaming fashion and streams it out to a new DICOM P10 file.",-1)),h(e,{sharedStateKey:"code-example"},{default:k(()=>[h(t,{label:"Gleam"},{default:k(()=>a[0]||(a[0]=[i("div",{class:"language-gleam vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"gleam"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," dcmfx_p10")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," dcmfx_p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"p10_error.{"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," P10Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," dcmfx_p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"p10_read.{"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," P10ReadContext"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," dcmfx_p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"p10_write.{"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," P10WriteContext"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," file_streams"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"file_stream.{"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FileStream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," gleam"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"result")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," input_file "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "../../example.dcm"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," output_file "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "output.dcm"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"pub"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," fn"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Result"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Nil"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"P10Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," assert"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Ok"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(input_stream) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," file_stream."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open_read"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(input_file)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," assert"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Ok"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(output_stream) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," file_stream."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open_write"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(output_file)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  let"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," read_context "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," p10_read."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"new_read_context"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  let"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," write_context "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," p10_write."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"new_write_context"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  do_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(input_stream, output_stream, read_context, write_context)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"fn"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," do_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  input_stream: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FileStream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  output_stream: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FileStream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  read_context: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"P10ReadContext"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  write_context: "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"P10WriteContext"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Result"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Nil"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"P10Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #(parts, read_context) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," result."),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(dcmfx_p10."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"read_parts_from_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    input_stream,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    read_context,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ))")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #(ended, write_context) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," result."),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(dcmfx_p10."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"write_parts_to_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    parts,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    output_stream,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    write_context,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ))")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  case"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ended {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    True"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ->"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Ok"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Nil"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    False"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ->"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," do_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(input_stream, output_stream, read_context, write_context)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1}),h(t,{label:"Rust"},{default:k(()=>a[1]||(a[1]=[i("div",{class:"language-rs vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"rs"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"use"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," dcmfx"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"use"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," std"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fs"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"File"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," INPUT_FILE"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"str"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "../../example.dcm"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," OUTPUT_FILE"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"str"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "output.dcm"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"pub"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," fn"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Result"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<(), "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"P10Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," input_stream "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," File"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"INPUT_FILE"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"unwrap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," output_stream "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," File"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"create"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"OUTPUT_FILE"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"unwrap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," read_context "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," P10ReadContext"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    let"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," write_context "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," P10WriteContext"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    loop"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        let"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," parts "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," dcmfx"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"read_parts_from_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            &mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," input_stream,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            &mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," read_context,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        )"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        let"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ended "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," dcmfx"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"p10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"write_parts_to_stream"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            &"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"parts,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            &mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," output_stream,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            &mut"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," write_context,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        )"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ended {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            break"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Ok"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1}),a[4]||(a[4]=i("p",null,[i("a",{href:"https://github.com/dcmfx/dcmfx/tree/main/examples/dicom_stream",target:"_blank",rel:"noreferrer"},"View on GitHub")],-1))])}const A=n(r,[["render",d]]);export{D as __pageData,A as default};