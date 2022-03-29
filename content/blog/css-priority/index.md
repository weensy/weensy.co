---
title: CSS priority
date: "2019-11-18"
tags: [css, priority, rule]
idx: ture
---

<style>
  table {
    width: 60%;
    margin: auto;
  }
  th {
    border: solid 1px #d2d2d7;
    text-align: center;
    width: 20%;
  }
  td {
    text-align: center;
    border: 0 !important;
  }
  div .scrll {
    width: 100%;
    overflow: auto;
  }
</style>

### Calculating Specificity Of Selector Expression

A selector expression is a selector or a combination of selectors.

<div class="scrll">
<table>
  <thead>
    <tr>
      <th>[0]</th>
      <th>[0]</th>
      <th>[0]</th>
      <th>[0]</th>
      <th>[0]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>⇧</td>
      <td>⇧</td>
      <td>⇧</td>
      <td>⇧</td>
      <td>⇧</td>
    </tr>
    <tr>
      <td>!important</td>
      <td>style=""</td>
      <td>id selector</td>
      <td>class, attribute, psuedo class selectors</td>
      <td>type selector and psuedo element</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin: 1.5em 0;">For every selector expression we get a five digit priority value from the above diagram. Larger values override smaller values. Same values override based on top to bottom(last selector expression overrides previous ones).</p>
