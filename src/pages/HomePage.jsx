import React from 'react'
import Hero from '../components/Hero'
import Table from '../components/Table'
import CardRail from '../components/CardRail'

const HomePage = () => {
  return (
    <>
        <Hero />
        <section className='p-10 max-w-screen-lg m-auto '>
            <div className="text">
                <h2 className='text-5xl font-semibold mb-5'>Egestas pharetra pulvinar consectetur</h2>
                <p className='mb-2'>Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos torquent nullam varius praesent penatibus nullam dictumst iaculis hac. Accumsan lorem nunc ex platea amet justo porttitor suspendisse. Commodo diam mi congue platea fusce non in. Magna sit eu in vivamus pharetra magna pharetra. Massa nullam consequat proin quis vehicula feugiat. Fermentum felis at commodo fermentum venenatis taciti semper. Platea amet pellentesque viverra bibendum auctor, maecenas sapien.</p>
                <p className='mb-2'>Sagittis mollis sodales penatibus conubia suspendisse pharetra consequat mi ridiculus. Varius habitasse dapibus porta ultrices metus; commodo mattis. Egestas pharetra pulvinar consectetur per mattis orci nisl porta non. Erat dictum curabitur ipsum, eu donec maecenas. Posuere tristique morbi duis aenean euismod fermentum? Fringilla ullamcorper dolor auctor cursus; iaculis et. Maximus felis litora commodo porttitor inceptos aliquet duis facilisi. Turpis vitae nascetur mattis gravida at. Commodo non consequat nam elementum hendrerit quam. Vestibulum vivamus venenatis sem, curabitur tincidunt maecenas.</p>
                <p className='mb-2'>Donec dis vitae posuere sagittis curabitur, enim aptent. Dictum augue tempor; taciti pretium blandit luctus aliquet. Feugiat dolor curae integer auctor neque malesuada, gravida efficitur suscipit. Ex est ornare nec hac erat potenti montes! Diam lobortis sollicitudin lacinia ex lacinia et non vulputate in. Ante praesent justo aenean tellus semper pretium diam ex. Consectetur odio risus nec imperdiet nulla molestie a euismod. Purus quisque scelerisque ultrices non eu torquent malesuada; rutrum ultrices.</p>
                <p className='mb-2'>Aliquam inceptos bibendum risus suscipit risus. Porta maximus justo natoque hac vulputate iaculis. Hac phasellus suscipit nibh aliquet ultrices lacus id natoque. Tellus eu tristique interdum parturient montes ornare feugiat blandit sagittis. Lacinia himenaeos nam netus accumsan, sodales at. Cursus himenaeos magna magna metus nibh orci. Aclass mollis, vitae placerat fermentum magna rutrum. Praesent consequat id vestibulum laoreet nascetur magnis ac.</p>
                <p className='mb-2'>Sodales interdum non in velit fringilla purus. Laoreet rutrum nullam ridiculus praesent euismod cursus torquent orci. Etiam lectus congue eu mattis magna velit tortor. Varius justo congue nibh nam vehicula laoreet iaculis elementum senectus. Egestas sollicitudin sagittis, ipsum natoque ultrices pellentesque luctus nostra. Vitae magnis cras porttitor vivamus sed aliquet nibh euismod. Ipsum himenaeos ullamcorper phasellus dui senectus.</p>
            </div>
        </section>
        <CardRail />
    </>
  )
}

export default HomePage