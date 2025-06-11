import { useState } from "react";

import type { InteractionEvent } from "~/types/event";

type UseToggle = [boolean, (args: boolean | InteractionEvent) => void];

/**
 * Custom Hook to manega boolean state with toggle functionlaity...
 * @param {boolean} [initalValue=false] Option... 
 * @returns {[boolean, function]} where:
 * 
 * - the first is boolean value
 * -the se
 * 
 * @example
 * const [ value, toggleValue ] = useToggle()
 * toggleValue()
 * toggleValue(true) // sets true
 * toggleValue(false) // sets false
 */

export default function useToggle(initalValue: boolean = false): UseToggle {
  const [ value, setValue ] = useState(initalValue);

  const toggle = (forceValue: boolean | InteractionEvent) =>
    setValue((currentValue) => 
      typeof forceValue === 'boolean' ? forceValue : !currentValue
    );

  return [ value, toggle ];
};