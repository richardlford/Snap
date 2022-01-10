function typename (obj) {
    if (obj instanceof Node) {
      if (obj instanceof Morph) {
        if (obj instanceof SymbolMorph) {
          if (obj instanceof BlockSymbolMorph) {
            return "BlockSymbolMorph";
          }
          return "SymbolMorph";
        }
        if (obj instanceof TableFrameMorph) {
          return "TableFrameMorph";
        }
        if (obj instanceof TableCellMorph) {
          return "TableCellMorph";
        }
        if (obj instanceof BlockHighlightMorph) {
          return "BlockHighlightMorph";
        }
        if (obj instanceof ArrowMorph) {
          return "ArrowMorph";
        }
        if (obj instanceof SyntaxElementMorph) {
          if (obj instanceof ArgMorph) {
            if (obj instanceof FunctionSlotMorph) {
              if (obj instanceof ReporterSlotMorph) {
                if (obj instanceof RingReporterSlotMorph) {
                  return "RingReporterSlotMorph";
                }
                return "ReporterSlotMorph";
              }
              return "FunctionSlotMorph";
            }
            if (obj instanceof ArgLabelMorph) {
              return "ArgLabelMorph";
            }
            if (obj instanceof MultiArgMorph) {
              return "MultiArgMorph";
            }
            if (obj instanceof ColorSlotMorph) {
              return "ColorSlotMorph";
            }
            if (obj instanceof BooleanSlotMorph) {
              return "BooleanSlotMorph";
            }
            if (obj instanceof TemplateSlotMorph) {
              if (obj instanceof BlockInputFragmentMorph) {
                return "BlockInputFragmentMorph";
              }
              return "TemplateSlotMorph";
            }
            if (obj instanceof InputSlotMorph) {
              if (obj instanceof TextSlotMorph) {
                return "TextSlotMorph";
              }
              return "InputSlotMorph";
            }
            if (obj instanceof CommandSlotMorph) {
              if (obj instanceof CSlotMorph) {
                return "CSlotMorph";
              }
              if (obj instanceof RingCommandSlotMorph) {
                return "RingCommandSlotMorph";
              }
              return "CommandSlotMorph";
            }
            return "ArgMorph";
          }
          if (obj instanceof BlockMorph) {
            if (obj instanceof ReporterBlockMorph) {
              if (obj instanceof RingMorph) {
                return "RingMorph";
              }
              if (obj instanceof JaggedBlockMorph) {
                return "JaggedBlockMorph";
              }
              if (obj instanceof CustomReporterBlockMorph) {
                return "CustomReporterBlockMorph";
              }
              return "ReporterBlockMorph";
            }
            if (obj instanceof CommandBlockMorph) {
              if (obj instanceof HatBlockMorph) {
                if (obj instanceof PrototypeHatBlockMorph) {
                  return "PrototypeHatBlockMorph";
                }
                return "HatBlockMorph";
              }
              if (obj instanceof CustomCommandBlockMorph) {
                return "CustomCommandBlockMorph";
              }
              return "CommandBlockMorph";
            }
            return "BlockMorph";
          }
          return "SyntaxElementMorph";
        }
        if (obj instanceof BlockLabelPlaceHolderMorph) {
          return "BlockLabelPlaceHolderMorph";
        }
        if (obj instanceof BlockLabelFragmentMorph) {
          return "BlockLabelFragmentMorph";
        }
        if (obj instanceof HandMorph) {
          return "HandMorph";
        }
        if (obj instanceof BouncerMorph) {
          return "BouncerMorph";
        }
        if (obj instanceof FrameMorph) {
          if (obj instanceof TableMorph) {
            return "TableMorph";
          }
          if (obj instanceof ScriptsMorph) {
            return "ScriptsMorph";
          }
          if (obj instanceof WorldMorph) {
            return "WorldMorph";
          }
          if (obj instanceof StringFieldMorph) {
            return "StringFieldMorph";
          }
          if (obj instanceof ScrollFrameMorph) {
            if (obj instanceof ListMorph) {
              return "ListMorph";
            }
            if (obj instanceof SceneAlbumMorph) {
              return "SceneAlbumMorph";
            }
            if (obj instanceof JukeboxMorph) {
              return "JukeboxMorph";
            }
            if (obj instanceof WardrobeMorph) {
              return "WardrobeMorph";
            }
            return "ScrollFrameMorph";
          }
          if (obj instanceof StageMorph) {
            return "StageMorph";
          }
          return "FrameMorph";
        }
        if (obj instanceof TriggerMorph) {
          if (obj instanceof MenuItemMorph) {
            if (obj instanceof PianoKeyMorph) {
              return "PianoKeyMorph";
            }
            return "MenuItemMorph";
          }
          if (obj instanceof ToggleElementMorph) {
            return "ToggleElementMorph";
          }
          if (obj instanceof PushButtonMorph) {
            if (obj instanceof ToggleMorph) {
              return "ToggleMorph";
            }
            if (obj instanceof ToggleButtonMorph) {
              if (obj instanceof SceneIconMorph) {
                return "SceneIconMorph";
              }
              if (obj instanceof SoundIconMorph) {
                return "SoundIconMorph";
              }
              if (obj instanceof TurtleIconMorph) {
                return "TurtleIconMorph";
              }
              if (obj instanceof CostumeIconMorph) {
                return "CostumeIconMorph";
              }
              if (obj instanceof SpriteIconMorph) {
                return "SpriteIconMorph";
              }
              if (obj instanceof TabMorph) {
                return "TabMorph";
              }
              return "ToggleButtonMorph";
            }
            return "PushButtonMorph";
          }
          return "TriggerMorph";
        }
        if (obj instanceof TextMorph) {
          if (obj instanceof InputSlotTextMorph) {
            return "InputSlotTextMorph";
          }
          return "TextMorph";
        }
        if (obj instanceof StringMorph) {
          if (obj instanceof InputSlotStringMorph) {
            return "InputSlotStringMorph";
          }
          if (obj instanceof BlockLabelMorph) {
            return "BlockLabelMorph";
          }
          return "StringMorph";
        }
        if (obj instanceof CircleBoxMorph) {
          if (obj instanceof SliderMorph) {
            return "SliderMorph";
          }
          if (obj instanceof SliderButtonMorph) {
            return "SliderButtonMorph";
          }
          return "CircleBoxMorph";
        }
        if (obj instanceof DialMorph) {
          return "DialMorph";
        }
        if (obj instanceof BoxMorph) {
          if (obj instanceof ScriptFocusMorph) {
            return "ScriptFocusMorph";
          }
          if (obj instanceof CommentMorph) {
            return "CommentMorph";
          }
          if (obj instanceof MenuMorph) {
            if (obj instanceof PianoMenuMorph) {
              return "PianoMenuMorph";
            }
            return "MenuMorph";
          }
          if (obj instanceof InspectorMorph) {
            return "InspectorMorph";
          }
          if (obj instanceof MouseSensorMorph) {
            return "MouseSensorMorph";
          }
          if (obj instanceof SpeechBubbleMorph) {
            if (obj instanceof SpriteBubbleMorph) {
              return "SpriteBubbleMorph";
            }
            return "SpeechBubbleMorph";
          }
          if (obj instanceof StagePrompterMorph) {
            return "StagePrompterMorph";
          }
          if (obj instanceof WatcherMorph) {
            return "WatcherMorph";
          }
          if (obj instanceof CellMorph) {
            return "CellMorph";
          }
          if (obj instanceof ListWatcherMorph) {
            return "ListWatcherMorph";
          }
          return "BoxMorph";
        }
        if (obj instanceof BlinkerMorph) {
          if (obj instanceof CursorMorph) {
            return "CursorMorph";
          }
          return "BlinkerMorph";
        }
        if (obj instanceof ColorPickerMorph) {
          return "ColorPickerMorph";
        }
        if (obj instanceof ColorPaletteMorph) {
          if (obj instanceof GrayPaletteMorph) {
            return "GrayPaletteMorph";
          }
          return "ColorPaletteMorph";
        }
        if (obj instanceof PenMorph) {
          if (obj instanceof SpriteMorph) {
            return "SpriteMorph";
          }
          return "PenMorph";
        }
        if (obj instanceof HandleMorph) {
          return "HandleMorph";
        }
        if (obj instanceof ShadowMorph) {
          return "ShadowMorph";
        }
        if (obj instanceof CostumeEditorMorph) {
          return "CostumeEditorMorph";
        }
        if (obj instanceof SpriteHighlightMorph) {
          return "SpriteHighlightMorph";
        }
        if (obj instanceof PaletteHandleMorph) {
          return "PaletteHandleMorph";
        }
        if (obj instanceof StageHandleMorph) {
          return "StageHandleMorph";
        }
        if (obj instanceof IDE_Morph) {
          return "IDE_Morph";
        }
        if (obj instanceof PaintCanvasMorph) {
          if (obj instanceof VectorPaintCanvasMorph) {
            return "VectorPaintCanvasMorph";
          }
          return "PaintCanvasMorph";
        }
        if (obj instanceof PaintColorPickerMorph) {
          return "PaintColorPickerMorph";
        }
        if (obj instanceof InputFieldMorph) {
          return "InputFieldMorph";
        }
        if (obj instanceof AlignmentMorph) {
          return "AlignmentMorph";
        }
        if (obj instanceof DialogBoxMorph) {
          if (obj instanceof TableDialogMorph) {
            return "TableDialogMorph";
          }
          if (obj instanceof BlockVisibilityDialogMorph) {
            return "BlockVisibilityDialogMorph";
          }
          if (obj instanceof BlockRemovalDialogMorph) {
            return "BlockRemovalDialogMorph";
          }
          if (obj instanceof BlockImportDialogMorph) {
            return "BlockImportDialogMorph";
          }
          if (obj instanceof BlockExportDialogMorph) {
            return "BlockExportDialogMorph";
          }
          if (obj instanceof VariableDialogMorph) {
            return "VariableDialogMorph";
          }
          if (obj instanceof InputSlotDialogMorph) {
            return "InputSlotDialogMorph";
          }
          if (obj instanceof BlockEditorMorph) {
            return "BlockEditorMorph";
          }
          if (obj instanceof BlockDialogMorph) {
            return "BlockDialogMorph";
          }
          if (obj instanceof SoundRecorderDialogMorph) {
            return "SoundRecorderDialogMorph";
          }
          if (obj instanceof CamSnapshotDialogMorph) {
            return "CamSnapshotDialogMorph";
          }
          if (obj instanceof LibraryImportDialogMorph) {
            return "LibraryImportDialogMorph";
          }
          if (obj instanceof ProjectRecoveryDialogMorph) {
            return "ProjectRecoveryDialogMorph";
          }
          if (obj instanceof ProjectDialogMorph) {
            return "ProjectDialogMorph";
          }
          if (obj instanceof PaintEditorMorph) {
            if (obj instanceof VectorPaintEditorMorph) {
              return "VectorPaintEditorMorph";
            }
            return "PaintEditorMorph";
          }
          return "DialogBoxMorph";
        }
        return "Morph";
      }
      return "Node";
    }
    if (obj instanceof Costume) {
      if (obj instanceof SVG_Costume) {
        return "SVG_Costume";
      }
      return "Costume";
    }
    if (obj instanceof XML_Serializer) {
      if (obj instanceof SnapSerializer) {
        return "SnapSerializer";
      }
      return "XML_Serializer";
    }
    if (obj instanceof VectorShape) {
      if (obj instanceof VectorPolygon) {
        return "VectorPolygon";
      }
      if (obj instanceof VectorEllipse) {
        return "VectorEllipse";
      }
      if (obj instanceof VectorLine) {
        return "VectorLine";
      }
      if (obj instanceof VectorRectangle) {
        if (obj instanceof VectorSelection) {
          return "VectorSelection";
        }
        return "VectorRectangle";
      }
      return "VectorShape";
   }

   return "<unknown type>";
}
