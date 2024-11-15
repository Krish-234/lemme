import React from 'react'

const FeaturedStore = ( storeName ) => {

  return (
    <div>
      <div>
    {storeName}
      </div>
      <div className='flex'>
        <div>
          <button>
          All Items
          </button>
          <button>
            Books
          </button>
          <button>
            Apparel
          </button>
          <button>
            Electronic
          </button>
          <button>
            Stationary
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedStore
