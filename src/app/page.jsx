'use client'

import News from '@/components/News'
import store, { wrapper } from '@/store'
import { Provider } from 'react-redux'

function Home() {
  return (
    <Provider store={store}>
      <main>
        <div>
          <News />
        </div>
      </main>
    </Provider>
  )
}

export default wrapper.withRedux(Home)
