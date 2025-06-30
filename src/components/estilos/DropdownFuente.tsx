import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownFuente = ({ value, onChange }: Props) => {
  const fontOptions = [
    /* built-ins */
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", serif' },
    { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive' },
    { label: 'Courier New', value: '"Courier New", monospace' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Impact', value: 'Impact, sans-serif' },
    /* extra fonts */
    { label: 'Aladin', value: 'Aladin, cursive' },
    { label: 'Averia Serif Libre', value: 'AveriaSerifLibre, serif' },
    { label: 'Barriecito', value: 'Barriecito, cursive' },
    { label: 'Barrio', value: 'Barrio, cursive' },
    { label: 'Bitcount Grid Double', value: 'BitcountGridDouble, monospace' },
    { label: 'Black Ops One', value: 'BlackOpsOne, sans-serif' },
    { label: 'Bodoni Moda', value: 'BodoniModa, serif' },
    { label: 'Bungee Shade', value: 'BungeeShade, cursive' },
    { label: 'Bungee Spice', value: 'BungeeSpice, cursive' },
    { label: 'Butcherman', value: 'Butcherman, cursive' },
    { label: 'Cabin Sketch', value: 'CabinSketch, cursive' },
    { label: 'Caesar Dressing', value: 'CaesarDressing, cursive' },
    { label: 'CalSans', value: 'CalSans, sans-serif' },
    { label: 'Chango', value: 'Chango, cursive' },
    { label: 'Codystar', value: 'Codystar, cursive' },
    { label: 'Coral Pixels', value: 'CoralPixels, cursive' },
    { label: 'Crafty Girls', value: 'CraftyGirls, cursive' },
    { label: 'Diplomata', value: 'Diplomata, serif' },
    { label: 'Eater', value: 'Eater, cursive' },
    { label: 'Faster One', value: 'FasterOne, cursive' },
    { label: 'Fredericka the Great', value: 'FrederickatheGreat, cursive' },
    { label: 'Gloria Hallelujah', value: 'GloriaHallelujah, cursive' },
    { label: 'Hanalei Fill', value: 'HanaleiFill, cursive' },
    { label: 'Henny Penny', value: 'HennyPenny, cursive' },
    { label: 'Homemade Apple', value: 'HomemadeApple, cursive' },
    { label: 'Honk', value: 'Honk, cursive' },
    { label: 'Jacquard 24', value: 'Jacquard24, cursive' },
    { label: 'Julee', value: 'Julee, cursive' },
    { label: 'Kablammo', value: 'Kablammo, cursive' },
    { label: 'Love Ya Like A Sister', value: 'LoveYaLikeASister, cursive' },
    { label: 'Lugrasimo', value: 'Lugrasimo, cursive' },
    { label: 'Megrim', value: 'Megrim, cursive' },
    { label: 'Monofett', value: 'Monofett, cursive' },
    { label: 'Monoton', value: 'Monoton, cursive' },
    { label: 'MountainsofChristmas', value: 'MountainsofChristmas, cursive' },
    { label: 'Moo Lah Lah', value: 'MooLahLah, cursive' },
    { label: 'Mrs Sheppards', value: 'MrsSheppards, cursive' },
    { label: 'Mystery Quest', value: 'MysteryQuest, cursive' },
    { label: 'Nosifer', value: 'Nosifer, cursive' },
    { label: 'Pacifico', value: 'Pacifico, cursive' },
    { label: 'Parisienne', value: 'Parisienne, cursive' },
    { label: 'Pirata One', value: 'PirataOne, cursive' },
    { label: 'Press Start 2P', value: 'PressStart2P, monospace' },
    { label: 'Protest Revolution', value: 'ProtestRevolution, cursive' },
    { label: 'Ribeye Marrow', value: 'RibeyeMarrow, cursive' },
    { label: 'Righteous', value: 'Righteous, cursive' },
    { label: 'Rubik Beastly', value: 'RubikBeastly, sans-serif' },
    { label: 'Rubik Distressed', value: 'RubikDistressed, sans-serif' },
    { label: 'Rubik Glitch', value: 'RubikGlitch, sans-serif' },
    { label: 'Rubik Iso', value: 'RubikIso, sans-serif' },
    { label: 'Rubik Maps', value: 'RubikMaps, sans-serif' },
    { label: 'Rubik Moonrocks', value: 'RubikMoonrocks, sans-serif' },
    { label: 'Rubik Puddles', value: 'RubikPuddles, sans-serif' },
    { label: 'Rubik Vinyl', value: 'RubikVinyl, sans-serif' },
    { label: 'Rubik Wet Paint', value: 'RubikWetPaint, sans-serif' },
    { label: 'Rye', value: 'Rye, cursive' },
    { label: 'Sancreek', value: 'Sancreek, cursive' },
    { label: 'Sixtyfour', value: 'Sixtyfour, monospace' },
    {
      label: 'Sixtyfour Convergence',
      value: 'SixtyfourConvergence, monospace',
    },
    { label: 'Stalinist One', value: 'StalinistOne, cursive' },
    { label: 'Trade Winds', value: 'TradeWinds, cursive' },
    { label: 'Uncial Antiqua', value: 'UncialAntiqua, cursive' },
    { label: 'WindSong', value: 'WindSong, cursive' },
    { label: 'Yeseva One', value: 'YesevaOne, cursive' },
    { label: 'Zen Dots', value: 'ZenDots, cursive' },
  ]

  return (
    <div>
      <label htmlFor="fuente">Fuente: </label>

      <Dropdown
        inputId="fuente"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={fontOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Selecciona una fuente"
        itemTemplate={(option) => (
          <div style={{ fontFamily: option.value }}>{option.label}</div>
        )}
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownFuente
