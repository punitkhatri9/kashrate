/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Herosection() {
    return (
        
                <div>
                  <section className="relative text-green-900 bg-red-200">
                    {/*     <div class="min-h-screen hero-image bg-center bg-cover flex" style="background-image: url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);"> */}
                    <div className="flex min-h-screen bg-right-bottom bg-cover hero-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)'}}>
                      <div className="container relative z-10 flex items-end p-4 mx-auto">
                        <div>
                          <div className="float-left px-5 py-4 my-5 content">
                            <div className="mb-3 text-2xl heading md:text-4xl">Affordable year-round care. No insurance required!</div>
                            <div className="hidden leading-normal text sm:block">Helping Women Meet All of their Health Care Needs</div>
                          </div>
                          <div className="px-5 clear-left cta">
                            <a className="block text-white no-underline btn btn-primary sm:inline-block global-transition" href target>
                              <div className="flex items-center justify-center">
                                <span>Join Alpha Today</span>
                                <span className="ml-4 fa fa-xs fa-arrow-right" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              
            
    )
}

export default Herosection

