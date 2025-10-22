import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-transparent" sectionId={SectionId.Contact}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 right-[-10%] h-60 w-60 rounded-full bg-orange-400/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-60 w-60 rounded-full bg-teal-400/30 blur-3xl"
        />
        <div className="relative flex flex-col gap-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-orange-300 shadow-lg shadow-black/20">
                <EnvelopeIcon className="h-9 w-9" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                  Let&apos;s Connect
                </span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{headerText}</h2>
                <p className="text-sm text-neutral-200 sm:text-base">{description}</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-200">
              Available for opportunities
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="order-2 flex flex-col rounded-2xl border border-white/10 bg-white/10 p-6 shadow-inner shadow-black/20 backdrop-blur md:order-1">
              <ContactForm />
            </div>
            <div className="order-1 flex flex-col gap-6 md:order-2">
              <dl className="flex flex-col gap-4 text-sm text-neutral-100 sm:text-base">
                {items.map(({type, text, href}) => {
                  const {Icon, srLabel} = ContactValueMap[type];
                  return (
                    <div
                      className="rounded-2xl border border-transparent bg-transparent transition-all duration-200 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-400/10"
                      key={srLabel}>
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center gap-4 px-4 py-3">
                        <a
                          className={classNames(
                            'group flex w-full items-center gap-4 rounded-md text-neutral-200 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
                            {'hover:text-white': href},
                          )}
                          href={href}
                          rel={href ? 'noreferrer' : undefined}
                          target={href ? '_blank' : undefined}>
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-colors duration-200 group-hover:border-orange-300/40 group-hover:bg-orange-300/20">
                            <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-orange-300 sm:h-6 sm:w-6" />
                          </div>
                          <span className="text-sm sm:text-base">{text}</span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
