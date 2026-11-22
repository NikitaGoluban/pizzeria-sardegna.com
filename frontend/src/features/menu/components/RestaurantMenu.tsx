/*
RestaurantMenu wyświetla kompletną kartę dań niezależnie od adresu strony.
Dzięki temu strona główna i zachowany adres /menu.html korzystają dokładnie
z tych samych kategorii, cen, informacji o pizzy i legendy alergenów.
*/

import { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PageIntro } from '../../../components/ui/PageIntro'
import { Section } from '../../../components/ui/Section'
import { menuCategories } from '../menuData'
import type { MenuCategoryData } from '../types'
import { MenuCategory } from './MenuCategory'
import { MenuLegend } from './MenuLegend'

function PizzaInformation() {
  const translation = useTranslation()

  return (
    <Section title={translation.t('menu.pizzaInformation.title')}>
      <ul>
        <li>{translation.t('menu.pizzaInformation.large')}</li>
        <li>{translation.t('menu.pizzaInformation.small')}</li>
        <li>{translation.t('menu.pizzaInformation.toppings')}</li>
        <li>{translation.t('menu.pizzaInformation.family')}</li>
      </ul>
    </Section>
  )
}

function showMenuCategory(category: MenuCategoryData) {
  if (category.id === 'traditional-pizza') {
    return (
      <Fragment key={category.id}>
        <PizzaInformation />
        <MenuCategory category={category} />
      </Fragment>
    )
  }

  return <MenuCategory key={category.id} category={category} />
}

export function RestaurantMenu() {
  const translation = useTranslation()

  // Po przekierowaniu ze starego /menu.html menu musi najpierw zostać wyrenderowane.
  // Dopiero w następnej klatce przewijamy dokument do elementu #menu.
  useEffect(() => {
    if (window.location.hash !== '#menu') {
      return undefined
    }

    const animationFrame = window.requestAnimationFrame(() => {
      document.querySelector('#menu')?.scrollIntoView({ block: 'start' })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div id="menu" className="restaurant-menu">
      <PageIntro eyebrow={translation.t('menu.eyebrow')} title={translation.t('menu.title')}>
        <p>{translation.t('menu.intro')}</p>
        <p className="menu-source-note">{translation.t('menu.note')}</p>
      </PageIntro>

      <nav className="menu-page-navigation" aria-label={translation.t('menu.categoryNavigation')}>
        <a href="#aperitifs">{translation.t('menu.categories.aperitifs.title')}</a>
        <a href="#hot-drinks">{translation.t('menu.categories.hot-drinks.title')}</a>
        <a href="#cold-drinks">{translation.t('menu.categories.cold-drinks.title')}</a>
        <a href="#beer">{translation.t('menu.categories.beer.title')}</a>
        <a href="#red-wine">{translation.t('menu.categories.red-wine.title')}</a>
        <a href="#white-wine">{translation.t('menu.categories.white-wine.title')}</a>
        <a href="#rose-wine">{translation.t('menu.categories.rose-wine.title')}</a>
        <a href="#digestifs">{translation.t('menu.categories.digestifs.title')}</a>
        <a href="#liqueurs">{translation.t('menu.categories.liqueurs.title')}</a>
        <a href="#whisky">{translation.t('menu.categories.whisky.title')}</a>
        <a href="#spirits">{translation.t('menu.categories.spirits.title')}</a>
        <a href="#cocktails">{translation.t('menu.categories.cocktails.title')}</a>
        <a href="#starters">{translation.t('menu.categories.starters.title')}</a>
        <a href="#salads">{translation.t('menu.categories.salads.title')}</a>
        <a href="#traditional-pizza">{translation.t('menu.categories.traditional-pizza.title')}</a>
        <a href="#house-pizza">{translation.t('menu.categories.house-pizza.title')}</a>
        <a href="#side-dishes">{translation.t('menu.categories.side-dishes.title')}</a>
        <a href="#desserts">{translation.t('menu.categories.desserts.title')}</a>
        <a href="#allergens">{translation.t('menu.legend.navigation')}</a>
      </nav>

      {menuCategories.map(showMenuCategory)}
      <MenuLegend />

      <Section title={translation.t('menu.orderTitle')}>
        <p>
          {translation.t('menu.orderBeforePhone')}{' '}
          <a href="tel:+4964284474948">+49 6428 4474948</a>{' '}
          {translation.t('menu.orderAfterPhone')}
        </p>
      </Section>
    </div>
  )
}
