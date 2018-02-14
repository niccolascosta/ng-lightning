# `<ngl-modal>`

### Content

  * `[body]`: Body content.
  * `[tagline]`: If you need to provide additional context inside the header.
  * `ng-template[nglModalFooter]`: Contains buttons displayed on modal's footer.

### Input

  * `header?: string`: Heading text.
  * `open?: boolean`: Whether modal is visible or not.
  * `size?: 'string'`: Modal size. Possible values are empty, `medium` and `large`.
  * `directional: boolean = false`: Whether buttons inside footer spread to both left and right.

### Output

  * `openChange: EventEmitter<boolean>`: emitted when modal's visibility is going to change to `false`

# `ng-template[nglModalHeader]`

### Variables

  * `id: string`: Auto generated unique ID used for accessibility.
