'use client'

import News from '@/components/News'
import store from '@/store'
import { Provider } from 'react-redux'

export default function Home() {
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
