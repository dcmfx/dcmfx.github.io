import{_ as a,c as t,a4 as o,o as r}from"./chunks/framework.CQS5UjL2.js";const f=JSON.parse('{"title":"DICOM Libraries","description":"","frontmatter":{},"headers":[],"relativePath":"libraries/overview.md","filePath":"libraries/overview.md"}'),s={name:"libraries/overview.md"};function i(n,e,l,d,c,m){return r(),t("div",null,e[0]||(e[0]=[o('<h1 id="dicom-libraries" tabindex="-1">DICOM Libraries <a class="header-anchor" href="#dicom-libraries" aria-label="Permalink to &quot;DICOM Libraries&quot;">​</a></h1><p>The internal libraries that make up DCMfx are:</p><ul><li><p><strong><code>dcmfx_core</code> / <code>dcmfx::core</code></strong>. Provides core DICOM concepts such as data sets, data elements, value representations, value multiplicity, and transfer syntaxes. Defines a registry of the data elements defined in Part 6 of the DICOM specification. as well as well-known private data elements.</p></li><li><p><strong><code>dcmfx_p10</code> / <code>dcmfx::p10</code></strong>. Reads, writes, and modifies the DICOM P10 file format. Uses a streaming design suited for highly concurrent and memory-constrained environments. Provides transforms for reading and modifying streams of DICOM P10 data.</p></li><li><p><strong><code>dcmfx_json</code> / <code>dcmfx::json</code></strong>. Converts between DICOM data sets and the DICOM JSON Model, with stream conversion to DICOM JSON. Optionally extends the DICOM JSON Model to allow for the storage of encapsulated pixel data.</p></li><li><p><strong><code>dcmfx_pixel_data</code> / <code>dcmfx::pixel_data</code></strong>. Extracts frames of pixel data from a DICOM data set. Note that decoding and decompression of the raw pixel data bytes is not yet supported.</p></li><li><p><strong><code>dcmfx_anonymize</code> / <code>dcmfx::anonymize</code></strong>. Anonymizes the data elements in a DICOM data set or stream of DICOM P10 data.</p></li></ul><p>See the <a href="./examples/">examples</a> section for code examples showing how to perform common tasks using the DCMfx libraries.</p><h2 id="languages" tabindex="-1">Languages <a class="header-anchor" href="#languages" aria-label="Permalink to &quot;Languages&quot;">​</a></h2><p>DCMfx is dual-implemented in two languages: <a href="https://gleam.run" target="_blank" rel="noreferrer">Gleam</a> and <a href="https://rust-lang.org" target="_blank" rel="noreferrer">Rust</a>. The two implementations have identical designs and very similar APIs.</p><h3 id="gleam" tabindex="-1">Gleam <a class="header-anchor" href="#gleam" aria-label="Permalink to &quot;Gleam&quot;">​</a></h3><p>The Gleam implementation allows DCMfx to be used directly from Gleam, Elixir, Erlang, JavaScript, and TypeScript. It&#39;s also the only DICOM library that runs natively on the BEAM VM.</p><h3 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-label="Permalink to &quot;Rust&quot;">​</a></h3><p>The Rust implementation allows DCMfx to be used from Rust, compile to WASM, and is faster with lower memory usage. The Rust implementation is used for the <a href="./../tools/cli">CLI tool</a>.</p>',10)]))}const h=a(s,[["render",i]]);export{f as __pageData,h as default};