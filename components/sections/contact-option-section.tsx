import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {Button} from '@components/elements/button'

export const ContactOptionsSection = () => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="full" className="py-20 lg:py-28 xl:py-32 2xl:py-40">
      <FadeIn direction="up">
        <Icon src="/icons/indigo-send-icon.svg" className="shadow-indigo-100" />
        <ParagraphHeading text="Email" className="border-indigo-300" />
        <Paragraph>Wenn Du nicht direkt ein Gespräch buchen möchtest, kannst Du mich jederzeit per Email kontaktieren.</Paragraph>
        <div className="px-4">
          <Button type="secondary" text="Email schreiben" action={() => window.open('mailto:mail@lukaswiesehan.de', '_ blank')} loading={false} />
        </div>
      </FadeIn>
      <FadeIn direction="up" delay={breakpoint.md ? 0.1 : 0}>
        <Icon src="/icons/indigo-messenger-icon.svg" className="shadow-indigo-100" transitionDelay={breakpoint.md ? 0.1 : 0} />
        <ParagraphHeading text="Facebook" className="border-indigo-300" />
        <Paragraph>
          Schreib&apos; mir gern auch auf Facebook. Hier bin ich allerdings eher inaktiv, Content gibt&apos;s auf LinkedIn und Instagram.
        </Paragraph>
        <div className="px-4">
          <Button type="secondary" text="Zu Facebook" action={() => window.open('https://www.facebook.com/lukas.wiesehan/', '_ blank')} loading={false} />
        </div>
      </FadeIn>
      <FadeIn direction="up" delay={breakpoint.lg ? 0.2 : 0}>
        <Icon src="/icons/indigo-linkedin-icon.svg" className="shadow-indigo-100" transitionDelay={breakpoint.lg ? 0.2 : 0} />
        <ParagraphHeading text="LinkedIn" className="border-indigo-300" />
        <Paragraph>Vernetze Dich mit mir auf LinkedIn. Dort poste ich regelmäßig Tipps und Tricks für Deine Produktwebsite.</Paragraph>
        <div className="px-4">
          <Button
            type="secondary"
            text="Zu LinkedIn"
            action={() => window.open('https://www.linkedin.com/in/lukas-wiesehan-74931b1bb/', '_ blank')}
            loading={false}
          />
        </div>
      </FadeIn>
      <FadeIn direction="up" delay={breakpoint.lg ? 0.3 : breakpoint.md ? 0.1 : 0}>
        <Icon src="/icons/indigo-instagram-icon.svg" className="shadow-indigo-100" transitionDelay={breakpoint.lg ? 0.3 : breakpoint.md ? 0.1 : 0} />
        <ParagraphHeading text="Instagram" className="border-indigo-300" />
        <Paragraph>Folge mir auf Instagram. Auch hier poste ich regelmäßig Tipps und Tricks aus dem Bereich Webdesign.</Paragraph>
        <div className="px-4">
          <Button
            type="secondary"
            text="Zu Instagram"
            action={() => window.open('https://www.instagram.com/lukaswiesehan/', '_ blank')}
            loading={false}
          />
        </div>
      </FadeIn>
    </Section>
  )
}
