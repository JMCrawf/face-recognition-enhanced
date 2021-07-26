import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f6 white">
        {
          'This A.I will detect faces in your pictures. Paste a link to give it a try!'
        }
      </p>
      <div className="center ">
        {/* bg-gold br3 ba bw2 b--light-gray mv4 w-100 w-50-m w-25-l mw5 shadow-3
        center */}
        <div className="form center pt2 pb2 br3 shadow-5 ba bw2 b--light-gray mv2">
          <input
            className="pa1 f5 w-75 input-reset ba bg-transparent hover-bg-black hover-white"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="pl8 w-28 grow f5 link ph3 pv2 dib white bg-gray"
            onClick={onButtonSubmit}
          >
            Detect!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
