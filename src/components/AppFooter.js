import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2025{" "}
            <a href="#" target="_blank">
              Magic Pay
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer>
  )
}

export default React.memo(AppFooter)
