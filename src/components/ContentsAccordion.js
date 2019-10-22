import React from "react"
import Collapsible from "react-collapsible"

class ContentsAccordion extends React.Component {
  render() {
    return (
      <div className="collapsibleWrapper">
        <Collapsible trigger="Lightning 🌩">
          <p>
            In the event of a storm, lightning strikes your house. Fortunately,
            there is no fire, but the overvoltage that occurs will damage
            sensitive electronic components in both the new TV, game console,
            and premium coffee machine.
          </p>
          <p>
            Even if the lightning does not directly damage the devices, the
            damage is still covered by our household and contents insurance. We
            replace the your damaged goods - and that for the new value!
          </p>
        </Collapsible>
        <Collapsible trigger="Water damage 💧">
          <p>
            A broken filter in the water pipe of a washing machine floats a
            large part of your rented apartment during your absence. The new
            leather sofa (value 5,000 EUR) as well as various electronic devices
            are irreparably damaged.
          </p>
          <p>
            In order to get cold feet in case of tap damage, we refund the
            damage to the electronics and furnishings at the new price! You can
            also protect yourself against tap water damage with our household
            and contents insurance.
          </p>
        </Collapsible>
        <Collapsible trigger="Storm damage 🌪">
          <p>
            A heavy storm partially uncovers the roof of your house, so that the
            rain will damage the new carpet, TV and sofa in the living room.
          </p>
          <p>
            With the household insurance of the matiive you are on the safe side
            in case of storm damage. It will reimburse you for the damage to
            your belongings. The damage to the building are taken over by the
            homeowners insurance.
          </p>
        </Collapsible>
        <Collapsible trigger="Flooding 🌊">
          <p>
            During a storm with heavy rain, water collects on the site and
            penetrates into the your home. The water damages and pollutes the
            furniture and electrical appliances in the living room.
          </p>
          <p>
            In household contents insurance, additional damage may be included
            in the insurance cover due to natural hazards such as flooding,
            earthquakes, landslides, avalanches, snow pressure or backwater. Our
            household insurance thus indemnifies the damage to electronics and
            furnishings and other household effects - and the new price value!
          </p>
        </Collapsible>
        <Collapsible trigger="Theft 🚨">
          <p>
            During a weekend excursion, burglars go about their business in your
            home. To get into the apartment, they break up the apartment door
            and damage it considerably. They bring along various electronic
            devices and valuables.
          </p>
          <p>
            We refund the value of the stolen items at the new price. In
            addition, we take over the damage done to the apartment door.
          </p>
        </Collapsible>
        <Collapsible trigger="Fire 🔥">
          <p>
            Due to a technical defect, an electric appliance in the living room
            develops a little fire, which quickly expands into a really
            dangerous fire. Until the fire department can extinguish the fire, a
            large part of the living room furniture is burned out or irreparably
            damaged by the extinguishing water. In the other rooms items have
            been damaged by the soot.
          </p>
          <p>
            We cover the entire damage and even reimburses the hotel costs if
            the apartment is no longer habitable due to insured damages.
          </p>
        </Collapsible>
      </div>
    )
  }
}

export default ContentsAccordion
