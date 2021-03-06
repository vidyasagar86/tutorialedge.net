import { setupTippy } from './utils/tippy.ts'
import { loadDeferredImgs } from './utils/images.ts'

import './components/profile.ts'
import './components/redirect.ts'
import './components/register.ts'
import './components/logout.ts'
import './components/quiz.ts'
// import './components/comments.ts'

function initialize() {
    loadDeferredImgs()
    setupTippy()
}

initialize();